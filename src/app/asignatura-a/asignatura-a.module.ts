import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaAPageRoutingModule } from './asignatura-a-routing.module';

import { AsignaturaAPage } from './asignatura-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaAPageRoutingModule
  ],
  declarations: []
})
export class AsignaturaAPageModule {}
