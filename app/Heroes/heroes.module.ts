import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { HeroesComponent } from "./heroes.component";

import { HeroDetailComponent } from "./hero-detail.component";
import { HeroesService } from "./heroes.service";

import { heroesRouting } from './heroes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule {

}
