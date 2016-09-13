import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroesService } from "./heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',


  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  
  .heroes li.selected {
    background-color: #85b0c9 !important;
    color: white;
  }

`],
  template: `
    
    <h2>My Heroes</h2>
      <ul class="heroes">
 
      <li *ngFor="let hero of heroes; trackBy: trackByHeroes" 
        (click)="onSelect(hero)">
 
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
     </ul>
   
 
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

  getHeroes() {
    this.heroesService.getHeroes().then(
      (heroes: Hero[]) => this.heroes = heroes
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

}
