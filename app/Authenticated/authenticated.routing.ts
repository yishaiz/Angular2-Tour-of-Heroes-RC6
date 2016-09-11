import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedComponent }    from './authenticated.component';

const authenticatedRoutes: Routes = [
  { path: 'authenticated', component: AuthenticatedComponent }
];

export const authenticatedRouting = RouterModule.forChild(authenticatedRoutes);

