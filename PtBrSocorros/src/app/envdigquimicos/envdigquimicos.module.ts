import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnvdigquimicosPage } from './envdigquimicos.page';

const routes: Routes = [
  {
    path: '',
    component: EnvdigquimicosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnvdigquimicosPage]
})
export class EnvdigquimicosPageModule {}
