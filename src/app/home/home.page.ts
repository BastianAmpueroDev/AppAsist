import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  nombreDocente: any;
  fechaHoraActual: string = '';

  cursos = [
      {id: 1, nombre: 'POO', codigo: 'APY1111', seccion: '010v'},
      {id: 2, nombre: 'LAA', codigo: 'APY2222', seccion: '011v'},
      {id: 3, nombre: 'SEE', codigo: 'APY3333', seccion: '012v'},
      {id: 4, nombre: 'JEE', codigo: 'APY4444', seccion: '013v'}         
  ];

  constructor(private router: Router) {
    this.nombreDocente = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
    console.log(this.router.getCurrentNavigation()?.extras.state?.['apellido']);
    console.log(this.router.getCurrentNavigation()?.extras.state?.['edad']);
  }

  ngOnInit() {
    this.actualizarFechaHora();
    setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

  actualizarFechaHora() {
    const ahora = new Date();
    this.fechaHoraActual = ahora.toLocaleString();
  }

  verDetalle(curso: any) {
    curso.id
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: curso.id,
        nombre: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    this.router.navigate(['/asignatura-a'], navigationExtras);
  }
}
