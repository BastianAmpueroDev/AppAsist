import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AlumnoPage implements OnInit {
  formattedDate: string = '';
  asistenciaConfirmada: boolean = false;

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

  simularEscaneoQR() {
    this.asistenciaConfirmada = true;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        nombre: 'Nombre del Alumno' // Reemplaza con el nombre real del alumno
      }
    };
    this.router.navigate(['/confirmacion'], navigationExtras);
  }
}