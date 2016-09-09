import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './Heroes/heroes.component';
import { HeroDetailComponent }  from './Heroes/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
