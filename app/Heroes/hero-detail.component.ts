import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Hero } from './Hero';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "./heroes.service";

@Component({
  selector: 'my-hero-detail',
  moduleId:module.id,
  styleUrls:['hero-detail.component.css'],

  template: `
   <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: {{hero.name}}</label>
      <br/>
      <input [(ngModel)]="editName" placeholder="name" class="input-name"/>
    </div>
  </div>
  
  <div>
  <button (click)="save()" class="btn btn-primary">save</button>
  <button (click)="cancel()" class="btn btn-warning">cancel</button>
  
</div>
  
    <button (click) = "returnToHeroesList()">Return to Heroes</button>
    
        <br/>
    
    <button (click) = "returnToHeroesListUsingBack()">Return to Heroes <span class="blue">(using history.back)</span></button>
 
    `
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  /* @Input() */
  hero: Hero;
  editName: string;

  private subscriber: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HeroesService) {
  }

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        // (+) converts string 'id' to a number

        this.service.getHero(id).then(
          hero => {
            this.hero = hero;
            this.editName = this.hero.name;
          }
        )
      }
    );
  }


  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }


  save() {
    console.log('save');
    this.hero.name = this.editName;
    // this.returnToHeroesList();
  }

  cancel() {
    console.log('cacnel');
    this.returnToHeroesList();
  }


  returnToHeroesList() {
    this.router.navigate(['/heroes']);
  }


  returnToHeroesListUsingBack() {
    window.history.back();
  }


}
