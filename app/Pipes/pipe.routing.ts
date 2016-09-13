import {Routes, RouterModule} from '@angular/router';
import { HeroBirthdayComponent}    from './hero-birthday.component';

const pipeRoutes: Routes = [
  {path: 'Pipe-Hero-Birthday', component: HeroBirthdayComponent}
];

export const pipeRouting = RouterModule.forChild(pipeRoutes);

