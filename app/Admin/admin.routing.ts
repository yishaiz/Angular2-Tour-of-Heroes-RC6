import { Routes, RouterModule } from '@angular/router';
import { AdminComponent }    from './admin.component';
import { AuthGuard } from "../auth-guard.service";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

export const adminRouting = RouterModule.forChild(adminRoutes);

