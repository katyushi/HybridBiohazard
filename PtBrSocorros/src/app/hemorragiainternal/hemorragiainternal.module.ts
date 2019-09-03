import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HemorragiainternalPage } from './hemorragiainternal.page';

const routes: Routes = [
  {
    path: '',
    component: HemorragiainternalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HemorragiainternalPage]
})
export class HemorragiainternalPageModule {}
