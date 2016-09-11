import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./Dashboard/dashboard.component";
import { HeroesComponent } from "./Heroes/heroes.component";
import { HeroDetailComponent } from "./Heroes/hero-detail.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { AnotherComponent } from "./Another/another.component";
import { MoviesListComponent } from "./Movies/movies-list";
import { AboutMoviesComponent } from "./Movies/about-movies";


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  /*
   { path: 'heroes', component: HeroesComponent },
   { path: 'hero/:id', component: HeroDetailComponent },
   */
  {
    path: 'another',
    component: AnotherComponent,
    data: {
      name: 'yishai'
    }
  },
  /*
   {path: 'movies', component: MoviesListComponent},
   {path: 'movies/about', component: AboutMoviesComponent},
   */

  { path: '**', component: PageNotFoundComponent }
];


/*
 ...heroesRouting,
 ...moviesRouting,
 ...anotherRouting,
 */


export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);

