import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthenticatedComponent }    from './authenticated.component';
import { AuthGuard } from "../auth-guard.service";

const authenticatedRoutes: Routes = [
  {
    path: 'authenticated',
    component: AuthenticatedComponent,
    canActivate: [AuthGuard]
  }
];

export const authenticatedRouting : ModuleWithProviders = RouterModule.forChild(authenticatedRoutes);
