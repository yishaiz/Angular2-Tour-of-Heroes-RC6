import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedComponent }    from './authenticated.component';
import { AuthGuard } from "../auth-guard.service";

const authenticatedRoutes: Routes = [
  {
    path: 'authenticated',
    component: AuthenticatedComponent,
    canActivate: [AuthGuard]
  }
];

export const authenticatedRouting = RouterModule.forChild(authenticatedRoutes);
