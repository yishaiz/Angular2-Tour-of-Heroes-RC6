import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

import { AnotherComponent }  from './Another/another.component';
import { DashboardComponent }  from './Dashboard/dashboard.component';
import { PageNotFoundComponent }  from './page-not-found.component';

import { routing, appRoutingProviders } from './app.routing';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './Heroes/in-memory-data.service';


import { HeroesModule } from "./Heroes/heroes.module";
import { MoviesModule } from "./Movies/movies.module";

import { AdminModule } from './Admin/admin.module';
import { AuthenticatedModule } from './Authenticated/authenticated.module';
import { LoginComponent } from "./Login/login.component";
import { HeroesService } from "./Heroes/heroes.service";
import { PipeModule } from "./Pipes/pipe.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule,
    MoviesModule,
    AdminModule,
    AuthenticatedModule,
    PipeModule,
    HttpModule //,
    //
      ,InMemoryWebApiModule.forRoot(InMemoryDataService)
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
