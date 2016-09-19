import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { HeroesComponent } from "./heroes.component";

import { HeroDetailComponent } from "./hero-detail.component";
import { HeroesService } from "./heroes.service";
import { HeroSearchComponent } from "./hero-search.component";

import { heroesRouting } from './heroes.routing';
import {HeroesOrderbyComponent} from "./heroes-orderby.component";
import { OrderByPipe } from "../Pipes/hero.orderby.name.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroesOrderbyComponent,
    HeroSearchComponent,
    OrderByPipe
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule {

}
