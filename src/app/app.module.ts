;
import { Testing2Component } from './features/testing2/testing2.component';
import { Testing1Component } from './features/testing1/testing1.component'import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {CoreModule}

@NgModule({
  declarations: [
    AppComponent,
    Testing1Component,
    Testing2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
