import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'seizures', loadChildren: './seizures/seizures.module#SeizuresPageModule' },
  { path: 'how-to-prepare-a-basic-first-aid-kit', loadChildren: './how-to-prepare-a-basic-first-aid-kit/how-to-prepare-a-basic-first-aid-kit.module#HowToPrepareABasicFirstAidKitPageModule' },
  { path: 'cuts', loadChildren: './cuts/cuts.module#CutsPageModule' },
  { path: 'burns', loadChildren: './burns/burns.module#BurnsPageModule' },
  { path: 'choking', loadChildren: './choking/choking.module#ChokingPageModule' },
  { path: 'fractures', loadChildren: './fractures/fractures.module#FracturesPageModule' },
  { path: 'internal-bleeding', loadChildren: './internal-bleeding/internal-bleeding.module#InternalBleedingPageModule' },
  { path: 'external-bleeding', loadChildren: './external-bleeding/external-bleeding.module#ExternalBleedingPageModule' },
  { path: 'poisoning', loadChildren: './poisoning/poisoning.module#PoisoningPageModule' },
  { path: 'drowning', loadChildren: './drowning/drowning.module#DrowningPageModule' },
  { path: 'digestive-poisoning', loadChildren: './digestive-poisoning/digestive-poisoning.module#DigestivePoisoningPageModule' },
  { path: 'dpfood', loadChildren: './dpfood/dpfood.module#DpfoodPageModule' },
  { path: 'foodp', loadChildren: './foodp/foodp.module#FoodpPageModule' },
  { path: 'meds', loadChildren: './meds/meds.module#MedsPageModule' },
  { path: 'toxicp', loadChildren: './toxicp/toxicp.module#ToxicpPageModule' },  { path: 'garrote', loadChildren: './garrote/garrote.module#GarrotePageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
