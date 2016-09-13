import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HeroesComponent }    from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

export const heroesRouting : ModuleWithProviders = RouterModule.forChild(heroesRoutes);
