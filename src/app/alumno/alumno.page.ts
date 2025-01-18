import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.formattedDate = new Date().toLocaleString();
  }
}