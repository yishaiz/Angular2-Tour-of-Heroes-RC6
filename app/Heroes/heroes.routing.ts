import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HeroesComponent }    from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroesOrderbyComponent } from "./heroes-orderby.component";

const heroesRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-search', component: HeroSearchComponent },
  { path: 'heroes-orderby', component: HeroesOrderbyComponent },
  { path: 'hero/:id', component: HeroDetailComponent }


];

export const heroesRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);
