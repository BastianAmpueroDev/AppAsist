import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AlumnosPage implements OnInit {
  curso: any;
  alumnos = [
    { id: 1, nombre: 'Juan Pérez', presente: false },
    { id: 2, nombre: 'María López', presente: false },
    { id: 3, nombre: 'Carlos García', presente: false },
    { id: 4, nombre: 'Ana Fernández', presente: false },
    { id: 5, nombre: 'Luis Martínez', presente: false }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = {
        id: params['id'],
        nombre: params['nombre'],
        codigo: params['codigo'],
        seccion: params['seccion']
      };

      // Marcar al alumno que inicia sesión como presente
      const alumnoId = params['alumnoId']; // Suponiendo que el ID del alumno se pasa como parámetro
      const alumno = this.alumnos.find(a => a.id === +alumnoId);
      if (alumno) {
        alumno.presente = true;
      }
    });
  }
}
