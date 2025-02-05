import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  constructor(
    private authservice: AuthServiceService,
    private router: Router,
    private alertController: AlertController,
    private http: HttpClient
  ) { }

  navegarExtras() {
    const user = "Alumno";
    const pass = "12345";

    // Realizamos la petición a la API para validar el login
    this.authservice.authenticateUser(user, pass).subscribe(
      (response: any) => {
        if (response && response.user) {
          // Guardamos la información del usuario
          this.authservice.setUserData(response);

          let setData = {
            state: {
              nombre: response.nombre,
              apellido: response.apellido,
              edad: response.edad,
              role: response.role
            }
          };

          // Asignar la ruta según el rol del usuario
          const loginMap: { [key: string]: string } = {
            'docente': '/home',
            'alumno': '/alumno'
          };

          if (loginMap[response.role]) {
            this.authservice.login();
            this.router.navigate([loginMap[response.role]], setData);
          } else {
            this.showErrorAlert();
          }
        } else {
          this.showErrorAlert();
        }
      },
      (error) => {
        this.showErrorAlert();
      }
    );
  }

  // Función para mostrar una alerta de error
  showErrorAlert() {
    this.alertController.create({
      header: 'Error',
      message: 'Credenciales inválidas',
      buttons: ['OK']
    }).then(alert => alert.present());
  }

  ngOnInit() {}
}
