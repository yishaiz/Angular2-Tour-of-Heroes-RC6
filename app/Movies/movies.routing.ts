  import {Routes, RouterModule} from '@angular/router';
  import {MoviesListComponent}    from './movies-list';
  import {AboutMoviesComponent}  from './about-movies';

  const moviesRoutes: Routes = [
    {path: 'movies', component: MoviesListComponent},
    {path: 'movies/about', component: AboutMoviesComponent}
  ];

  export const moviesRouting = RouterModule.forChild(moviesRoutes);
