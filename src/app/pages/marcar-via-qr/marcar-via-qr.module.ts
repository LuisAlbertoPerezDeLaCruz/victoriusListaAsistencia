import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarcarViaQRPage } from './marcar-via-qr.page';

const routes: Routes = [
  {
    path: '',
    component: MarcarViaQRPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarcarViaQRPage]
})
export class MarcarViaQRPageModule {}
