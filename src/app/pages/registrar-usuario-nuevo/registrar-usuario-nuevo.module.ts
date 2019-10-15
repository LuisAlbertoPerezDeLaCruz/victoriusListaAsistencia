import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrarUsuarioNuevoPage } from './registrar-usuario-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarUsuarioNuevoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarUsuarioNuevoPage]
})
export class RegistrarUsuarioNuevoPageModule {}
