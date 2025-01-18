import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ConfirmacionPage implements OnInit {
  nombreAlumno: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreAlumno = params['nombre'];
    });
  }

  irAAsignaturas() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        nombre: this.nombreAlumno
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }
}
