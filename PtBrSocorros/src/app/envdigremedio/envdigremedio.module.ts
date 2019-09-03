import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnvdigremedioPage } from './envdigremedio.page';

const routes: Routes = [
  {
    path: '',
    component: EnvdigremedioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnvdigremedioPage]
})
export class EnvdigremedioPageModule {}
