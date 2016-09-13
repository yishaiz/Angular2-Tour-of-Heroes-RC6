import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {pipeRouting} from './pipe.routing';


import {HeroBirthdayComponent} from "./hero-birthday.component";
import { MultiNumber } from "./multi.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    pipeRouting
  ],
  declarations: [
    HeroBirthdayComponent,
    MultiNumber
  ],
  providers: [
  ]
})
export class PipeModule {

}
