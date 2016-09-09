import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './Heroes/heroes.component';
import { HeroDetailComponent }  from './Heroes/hero-detail.component';

import { AnotherComponent}  from './Another/another.component';
import { DashboardComponent }  from './Dashboard/dashboard.component';
import { PageNotFoundComponent}  from './page-not-found.component';

import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    AnotherComponent,
    DashboardComponent,
    PageNotFoundComponent

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
