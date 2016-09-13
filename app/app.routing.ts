import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from "./Dashboard/dashboard.component";
import { HeroesComponent } from "./Heroes/heroes.component";
import { HeroDetailComponent } from "./Heroes/hero-detail.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { AnotherComponent } from "./Another/another.component";
import { MoviesListComponent } from "./Movies/movies-list";
import { AboutMoviesComponent } from "./Movies/about-movies";
import { LoginComponent } from "./Login/login.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'another',
    component: AnotherComponent,
    data: {
      name: 'yishai'
    }
  },

  { path: 'login', component: LoginComponent },

  { path: '**', component: PageNotFoundComponent }
];


/*
 ...heroesRouting,
 ...moviesRouting,
 ...anotherRouting,
 */


export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
//ModuleWithProviders
