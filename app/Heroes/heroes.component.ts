import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroesService } from "./heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',

  moduleId: module.id,
  styleUrls: ['heroes.style.css'],
  template: `
    
    <h2>My Heroes</h2>
    
    <div class="col-lg-3">
      <ul class="heroes">
   
        <li *ngFor="let hero of heroes; trackBy: trackByHeroes" 
          (click)="onSelect(hero)">
   
          <span class="badge">{{hero.id}}</span>{{hero.name}}
           <button class="delete"
                   (click)="delete(hero); $event.stopPropagation()">x</button>
        </li>
       </ul>
  </div>

    <div class="col-lg-3">
      <h3>add a new hero</h3>
      
      <div>
        <label>Hero name:</label> <input #heroName />
        <button (click)="add(heroName.value); heroName.value=''">
          Add
        </button>
      </div>
    </div>
      
 
`
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): any {

    console.log("getHeroes start " );

    this.heroesService.getHeroes().then(
      (heroes: Hero[]) =>
      {

        console.log("getHeroes resolved ", heroes );

        debugger;

        this.heroes = heroes
      }
    );
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

  trackByHeroes(index: number, hero: Hero) {
    return hero.id;
  }


  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    console.log("add hero - " ,name );

    this.heroesService.create(name)
      .then(this.getHeroes());
  }


  delete(hero: Hero): void {
    this.heroesService
      .delete(hero)
      .then(this.getHeroes());
  }


}
