import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }    from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroDetailCanDeactivateComponent }  from './hero-detail-deactivate.component';

const heroesRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'hero-candeactivate/:id', component: HeroDetailCanDeactivateComponent }

];

export const heroesRouting = RouterModule.forChild(heroesRoutes);
