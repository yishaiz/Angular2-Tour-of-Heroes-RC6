import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
// import { HeroesComponent }  from './Heroes/heroes.component';
// import { HeroDetailComponent }  from './Heroes/hero-detail.component';

import { AnotherComponent }  from './Another/another.component';
import { DashboardComponent }  from './Dashboard/dashboard.component';
import { PageNotFoundComponent }  from './page-not-found.component';

import { routing, appRoutingProviders } from './app.routing';

import { HeroesModule } from "./Heroes/heroes.module";
import { MoviesModule } from "./Movies/movies.module";

import { AdminModule } from './Admin/admin.module';
import { AuthenticatedModule } from './Authenticated/authenticated.module';
import { LoginComponent } from "./Login/login.component";
import { HeroesService } from "./Heroes/heroes.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule,
    MoviesModule,
    AdminModule,
    AuthenticatedModule

  ],
  declarations: [
    AppComponent,

    AnotherComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent

  ],
  providers: [
    appRoutingProviders,
    HeroesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
