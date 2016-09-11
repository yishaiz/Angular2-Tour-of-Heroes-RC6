import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Hero } from './Hero';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "./heroes.service";

@Component({
  selector: 'my-hero-detail',
  styles: [` 
`],
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  @Input() hero: Hero;
  private subscriber: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HeroesService) {
  }


  ngOnInit() {

    let id = +this.route.snapshot.params['id'];

    this.service.getHero(id).then(
      hero => this.hero = hero
    );

    /*
     this.subscriber = this.route.params.subscribe(
     params => {
     let id = +params['id'];
     // (+) converts string 'id' to a number

     this.service.getHero(id).then(
     hero => this.hero = hero
     )
     }
     );
     */

  }

  /*

   ngOnDestroy(){
   this.subscriber.unsubscribe();
   }

   */

}
