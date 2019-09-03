import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnvenenamentodigestivoPage } from './envenenamentodigestivo.page';

const routes: Routes = [
  {
    path: '',
    component: EnvenenamentodigestivoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnvenenamentodigestivoPage]
})
export class EnvenenamentodigestivoPageModule {}
