import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { MoviesListComponent } from "./movies-list";
import { AboutMoviesComponent } from "./about-movies";

import { moviesRouting } from './movies.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    moviesRouting
  ],
  declarations: [
    MoviesListComponent,
    AboutMoviesComponent
  ],
  providers: []
})
export class MoviesModule {

}
