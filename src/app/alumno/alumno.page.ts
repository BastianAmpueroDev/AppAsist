import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AlumnoPage implements OnInit {
  formattedDate: string = '';
  asistenciaConfirmada: boolean = false;
  scanning: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.actualizarFechaHora();
    setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

  actualizarFechaHora() {
    const ahora = new Date();
    this.formattedDate = ahora.toLocaleString();
  }

  async scanQRCode() {
    this.scanning = true;
    // Request camera permission
    await BarcodeScanner.checkPermission({ force: true });

    // Show the camera preview
    BarcodeScanner.hideBackground(); // Make the background of the WebView transparent
    const scanResult = await BarcodeScanner.startScan(); // Start scanning

    // Handle the result
    if (scanResult.hasContent) {
      console.log(scanResult.content); // The QR code content
      this.asistenciaConfirmada = true;
      this.scanning = false;
      this.captureImage();
    }
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    if (image.base64String) {
      const base64Image = `data:image/jpeg;base64,${image.base64String}`;
      console.log(base64Image); // The captured image in base64 format
      const navigationExtras: NavigationExtras = {
        queryParams: {
          nombre: 'Nombre del Alumno' // Reemplaza con el nombre real del alumno
        }
      };
      this.router.navigate(['/confirmacion'], navigationExtras);
    }
  }

  stopScanning() {
    BarcodeScanner.stopScan();
    this.scanning = false;
  }
}