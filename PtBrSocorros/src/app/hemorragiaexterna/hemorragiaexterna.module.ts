import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HemorragiaexternaPage } from './hemorragiaexterna.page';

const routes: Routes = [
  {
    path: '',
    component: HemorragiaexternaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HemorragiaexternaPage]
})
export class HemorragiaexternaPageModule {}
