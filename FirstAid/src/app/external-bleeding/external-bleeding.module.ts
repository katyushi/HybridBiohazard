import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExternalBleedingPage } from './external-bleeding.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalBleedingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExternalBleedingPage]
})
export class ExternalBleedingPageModule {}
