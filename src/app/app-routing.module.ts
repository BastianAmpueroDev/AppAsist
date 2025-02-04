import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardsGuard } from './guard/guards.guard';

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
  {
    path: 'asignatura-alumno',
    loadChildren: () => import('./asignatura-alumno/asignatura-alumno.module').then(m => m.AsignaturaAlumnoPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./page404/page404.module').then(m => m.Page404PageModule)
  },
  {
    path: '**',
    redirectTo: 'page404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

