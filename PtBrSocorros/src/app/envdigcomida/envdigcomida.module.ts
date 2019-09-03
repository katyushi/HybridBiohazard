import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnvdigcomidaPage } from './envdigcomida.page';

const routes: Routes = [
  {
    path: '',
    component: EnvdigcomidaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnvdigcomidaPage]
})
export class EnvdigcomidaPageModule {}
