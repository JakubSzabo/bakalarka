import { NgModule } from '@angular/core';
import {Testing2Component} from "./testing2.component";
import {SharedModule} from "../../shared/shared.module";
import {Testing2RoutingModule} from "./testing2-routing.module";

@NgModule({
  declarations: [Testing2Component],
  imports: [SharedModule, Testing2RoutingModule]
})
export class Testing2Module { }
