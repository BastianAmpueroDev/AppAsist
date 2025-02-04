import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsumoAPIService } from '../services/consumo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  nombreDocente: any;
  fechaHoraActual: string = '';
  nombreAlumno!: string;
  message: string = '';
  cursos: any[] = [];

  constructor(
    private consumoApi: ConsumoAPIService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.nombreDocente = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
    console.log(this.router.getCurrentNavigation()?.extras.state?.['apellido']);
    console.log(this.router.getCurrentNavigation()?.extras.state?.['edad']);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreAlumno = params['nombre'];
    });
    this.actualizarFechaHora();
    setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);

    document.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    document.addEventListener('touchmove', this.handleTouchMove, { passive: true });

    this.consumoApi.obtenerCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  handleTouchStart(event: TouchEvent) {
    // Handle touch start event
  }

  handleTouchMove(event: TouchEvent) {
    // Handle touch move event
  }

  mostrar() {
    this.consumoApi.getPosts().subscribe((res) => {
      this.message = '' + res[0].title;
      console.log(res[0].title);
      this.cdr.detectChanges();
    }, (error) => {
      console.log(error);
    });
  }

  actualizarFechaHora() {
    const ahora = new Date();
    this.fechaHoraActual = ahora.toLocaleString();
  }

  verDetalle(curso: any) {
    const navigationExtras = {
      queryParams: {
        id: curso.id,
        nombre: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    this.router.navigate(['/asignatura-a'], navigationExtras);
  }

  verAlumnos(curso: any) {
    const navigationExtras = {
      queryParams: {
        id: curso.id,
        nombre: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    this.router.navigate(['/alumnos'], navigationExtras);
  }
}
