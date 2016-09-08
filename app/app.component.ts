import { Component, OnInit } from '@angular/core';

import { Hero } from './Heroes/hero';
import { HeroDetailComponent } from './Heroes/hero-detail.component';
import { HeroesService } from './Heroes/heroes.service';

/*

 const HEROES: Hero[] = [
 { id: 11, name: 'Mr. Nice' },
 { id: 12, name: 'Narco' },
 { id: 13, name: 'Bombasto' },
 { id: 14, name: 'Celeritas' },
 { id: 15, name: 'Magneta' },
 { id: 16, name: 'RubberMan' },
 { id: 17, name: 'Dynama' },
 { id: 18, name: 'Dr IQ' },
 { id: 19, name: 'Magma' },
 { id: 20, name: 'Tornado' }
 ];
 */


@Component({
  selector: 'my-app',
  providers: [HeroesService],
  // directives:[HeroDetailComponent],
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
    
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
      <ul class="heroes">
 
      <li *ngFor="let hero of heroes; trackBy: trackByHeroes" 
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero">

        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
     </ul>
   
    <div *ngIf="selectedHero">
      <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    </div>

`
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroesService: HeroesService) {
    // this.heroesFromService = heroes;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }


  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  trackByHeroes(index: number, hero: Hero) {
    return hero.id;
  }


}
