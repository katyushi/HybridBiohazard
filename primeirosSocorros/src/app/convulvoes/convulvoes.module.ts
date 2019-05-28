import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConvulvoesPage } from './convulvoes.page';

const routes: Routes = [
  {
    path: '',
    component: ConvulvoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConvulvoesPage]
})
export class ConvulvoesPageModule {}
