import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'daco',
    loadChildren: () => import('./testing1/testing1-routing.module').then(module => module.Testing1RoutingModule)
  },

  {
    path: 'test',
    loadChildren: () => import('./testing2/testing2-routing.module').then(module => module.Testing2RoutingModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
