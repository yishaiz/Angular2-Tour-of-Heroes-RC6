import { Component, OnInit } from '@angular/core';
import { HeroesService } from "./Heroes/heroes.service";

@Component({
  selector: 'my-app',
  providers: [

  ],
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
    
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/hero/13" routerLinkActive="active">Specific Hero</a>
      <a routerLink="/another" routerLinkActive="active">Another Component</a>

      <a routerLink="/movies" routerLinkActive="active">Movies</a>
      <a routerLink="/movies/about" routerLinkActive="active">About Movies</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/authenticated" routerLinkActive="active">Authenticated</a>
      <a routerLink="/Pipe-Hero-Birthday" routerLinkActive="active">Pipe - hero-birthday</a>

      <a routerLink="/xxxx" routerLinkActive="active">Not found page</a>
    </nav>
    
    
     <!--<my-heroes></my-heroes> -->
<router-outlet></router-outlet>

`
})
export class AppComponent {
  title = 'Tour of Heroes';


}
