import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacionPage } from './confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionPageRoutingModule {}
