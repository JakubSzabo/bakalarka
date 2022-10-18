import { NgModule } from '@angular/core';
import {RouterContainerComponent} from "./router-container/router-container.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import { OrganizationComponent } from './organization/organization.component';



@NgModule({
  declarations: [
    RouterContainerComponent,
    OrganizationComponent
  ],
  imports: [SharedModule, AppRoutingModule]
})
export class CoreModule { }
