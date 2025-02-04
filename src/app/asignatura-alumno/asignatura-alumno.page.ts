import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ConsumoAPIService } from '../services/consumo-api.service';

@Component({
  selector: 'app-asignatura-alumno',
  templateUrl: './asignatura-alumno.page.html',
  styleUrls: ['./asignatura-alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AsignaturaAlumnoPage implements OnInit {
  nombreAlumno: string = '';
  cursos: any[] = [];

  constructor(private route: ActivatedRoute, private consumoApiService: ConsumoAPIService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreAlumno = params['nombre'];
    });

    this.consumoApiService.obtenerCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }
}