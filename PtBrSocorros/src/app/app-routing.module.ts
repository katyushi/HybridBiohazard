import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'topicoshome', loadChildren: './topicoshome/topicoshome.module#TopicoshomePageModule' },
  { path: 'termos', loadChildren: './termos/termos.module#TermosPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'convulcoes', loadChildren: './convulcoes/convulcoes.module#ConvulcoesPageModule' },
  { path: 'kitbasico', loadChildren: './kitbasico/kitbasico.module#KitbasicoPageModule' },
  { path: 'cortes', loadChildren: './cortes/cortes.module#CortesPageModule' },
  { path: 'queimaduras', loadChildren: './queimaduras/queimaduras.module#QueimadurasPageModule' },
  { path: 'engasgo', loadChildren: './engasgo/engasgo.module#EngasgoPageModule' },
  { path: 'fraturas', loadChildren: './fraturas/fraturas.module#FraturasPageModule' },
  { path: 'hemorragiainternal', loadChildren: './hemorragiainternal/hemorragiainternal.module#HemorragiainternalPageModule' },
  { path: 'hemorragiaexterna', loadChildren: './hemorragiaexterna/hemorragiaexterna.module#HemorragiaexternaPageModule' },
  { path: 'torniquete', loadChildren: './torniquete/torniquete.module#TorniquetePageModule' },
  { path: 'envenenamentorespiratorio', loadChildren: './envenenamentorespiratorio/envenenamentorespiratorio.module#EnvenenamentorespiratorioPageModule' },
  { path: 'envenenamentodigestivo', loadChildren: './envenenamentodigestivo/envenenamentodigestivo.module#EnvenenamentodigestivoPageModule' },
  { path: 'envdigcomida', loadChildren: './envdigcomida/envdigcomida.module#EnvdigcomidaPageModule' },
  { path: 'envdigremedio', loadChildren: './envdigremedio/envdigremedio.module#EnvdigremedioPageModule' },
  { path: 'envdigquimicos', loadChildren: './envdigquimicos/envdigquimicos.module#EnvdigquimicosPageModule' },
  { path: 'afogamento', loadChildren: './afogamento/afogamento.module#AfogamentoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
