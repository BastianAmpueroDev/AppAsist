import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-asignatura-a',
  templateUrl: './asignatura-a.page.html',
  styleUrls: ['./asignatura-a.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AsignaturaAPage implements OnInit {
  asignatura: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
   
    this.asignatura = {
      id,
      nombre: 'Matemáticas',
      profesor: 'Juan Pérez',
      horario: 'Lunes y Miércoles 10:00 - 12:00'
    };
  }
}