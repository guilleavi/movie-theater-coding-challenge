import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app-routing.module';

const ANGULAR_IMPORTS = [
  BrowserModule,
  HttpClientModule
];

const ROUTING_MODULES = [
  AppRoutingModule
];

const EAGER_LOADED_MODULES = [
  MoviesModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...ANGULAR_IMPORTS,
    ...ROUTING_MODULES,
    ...EAGER_LOADED_MODULES
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
