
import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private router: Router, private alertController: AlertController) { }

  navegarExtras() {
    let setData: NavigationExtras = {};

    const loginMap: { [key: string]: string } = {
      'prof:1234': '/home',
      'estu:1234': '/alumno'
    };

    const userPassKey = `${this.usuario.value.user}:${this.usuario.value.pass}`;

    if (loginMap[userPassKey]) {
      this.router.navigate([loginMap[userPassKey]], setData);
    } else {
      this.alertController.create({
        header: 'Error',
        message: 'Credenciales inválidas',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
  }

  ngOnInit() {
  }
}