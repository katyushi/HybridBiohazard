import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HowToPrepareABasicFirstAidKitPage } from './how-to-prepare-a-basic-first-aid-kit.page';

const routes: Routes = [
  {
    path: '',
    component: HowToPrepareABasicFirstAidKitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HowToPrepareABasicFirstAidKitPage]
})
export class HowToPrepareABasicFirstAidKitPageModule {}
