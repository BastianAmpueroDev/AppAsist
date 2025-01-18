import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaAPage } from './asignatura-a.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaAPageRoutingModule {}