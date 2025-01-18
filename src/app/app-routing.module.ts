import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoPageModule)
  },
  {
    path: 'asignatura-a',
    loadChildren: () => import('./asignatura-a/asignatura-a.module').then(m => m.AsignaturaAPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./confirmacion/confirmacion.module').then(m => m.ConfirmacionPageModule)
  },
  // otras rutas...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
