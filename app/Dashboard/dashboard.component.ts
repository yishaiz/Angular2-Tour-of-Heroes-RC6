import { Component, OnInit } from '@angular/core';

import { Hero } from '../Heroes/hero';
import { HeroesService } from '../Heroes/heroes.service';

@Component({
  selector: 'dashboard',

  templateUrl: 'app/dashboard/dashboard.component.html'
  // templateUrl:'./dashboard/dashboard.component.html'

  /*  template: `

   <h1>Dashboard Component</h1>
   <h3>a sample of other component</h3>
   `*/
})
export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void { /* not implemented yet */
  }
}
