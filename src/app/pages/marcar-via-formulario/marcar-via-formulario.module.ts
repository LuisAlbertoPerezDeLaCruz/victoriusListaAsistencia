import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarcarViaFormularioPage } from './marcar-via-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: MarcarViaFormularioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarcarViaFormularioPage]
})
export class MarcarViaFormularioPageModule {}
