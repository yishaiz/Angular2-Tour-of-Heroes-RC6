import { Routes, RouterModule } from '@angular/router';
import { AdminComponent }    from './admin.component';
import { AuthGuard } from "../auth-guard.service";
import { ModuleWithProviders } from '@angular/core';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);

