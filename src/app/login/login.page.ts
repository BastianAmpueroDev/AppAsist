import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, ReactiveFormsModule],
})
export class LoginPage implements OnInit {

  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  validar: boolean = true;

  constructor(
    private authservice: AuthServiceService,
    private router: Router,
    private alertController: AlertController,
    private http: HttpClient
  ) { }

  navegarExtras() {
    const user = this.usuario.value.user;
    const pass = this.usuario.value.pass;

    this.http.post('http://localhost:5000/login', { user, password: pass }).subscribe(
      (response: any) => {
        let setData: NavigationExtras = {
          state: {
            nombre: response.nombre,
            apellido: 'Doe', // Example data
            edad: 30 // Example data
          }
        };

        const loginMap: { [key: string]: string } = {
          'docente': '/home',
          'alumno': '/alumno'
        };

        if (loginMap[response.user]) {
          this.authservice.login();
          this.router.navigate([loginMap[response.user]], setData);
        } else {
          this.alertController.create({
            header: 'Error',
            message: 'Credenciales inválidas',
            buttons: ['OK']
          }).then(alert => alert.present());
        }
      },
      (error) => {
        this.alertController.create({
          header: 'Error',
          message: 'Credenciales inválidas',
          buttons: ['OK']
        }).then(alert => alert.present());
      }
    );
  }

  ngOnInit() {
    document.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    document.addEventListener('touchmove', this.handleTouchMove, { passive: true });
  }

  handleTouchStart(event: TouchEvent) {
    // Handle touch start event
  }

  handleTouchMove(event: TouchEvent) {
    // Handle touch move event
  }
}