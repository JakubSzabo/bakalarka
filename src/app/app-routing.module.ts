import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RouterContainerComponent} from "./core/router-container/router-container.component";

const routes: Routes = [
  {
    path: '',
    component: RouterContainerComponent,
    loadChildren: () =>
      import('./features/features-routing.module').then(
        module => module.FeaturesRoutingModule
      )
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
