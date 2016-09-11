import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminComponent } from "./admin.component";
import { AuthGuard } from "../auth-guard.service";


import { adminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    adminRouting
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule {

}
