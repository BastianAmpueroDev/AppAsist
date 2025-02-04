import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asignatura-a',
  templateUrl: './asignatura-a.page.html',
  styleUrls: ['./asignatura-a.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AsignaturaAPage implements OnInit {
  asignatura: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['asignatura']) {
        this.asignatura = JSON.parse(params['asignatura']);
      }
    });
  }

  async scanQRCode() {
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // Start scanning
      const result = await BarcodeScanner.startScan();

      // Handle the result
      if (result.hasContent) {
        console.log(result.content); // The QR code content
        this.registrarAsistencia(result.content);
      }
    } else if (status.denied) {
      // Permission was denied, show a message to the user
      alert('Camera permission was denied. Please enable it in your device settings.');
    } else if (status.neverAsked) {
      // Permission was never asked before, request it
      const newStatus = await BarcodeScanner.checkPermission({ force: true });
      if (newStatus.granted) {
        this.scanQRCode();
      }
    }
  }

  registrarAsistencia(qrContent: string) {
    const [alumno_id, codigo, seccion, fecha] = qrContent.split(',');

    this.http.post('http://localhost:5000/registrar_asistencia', {
      alumno_id,
      codigo,
      seccion,
      fecha
    }).subscribe(response => {
      console.log('Asistencia registrada:', response);
    }, error => {
      console.error('Error al registrar asistencia:', error);
    });
  }
}