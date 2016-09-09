import  { Injectable } from '@angular/core';
import  { Hero } from './Hero';
import  { HEROES } from './mock-heroes';


@Injectable()
export class HeroesService {

  getHeroes() {
    console.log("heroes", HEROES);

    // return HEROES;
    return Promise.resolve(HEROES);
  }


  getHeroesSlowly() {
    // return Promise.resolve(HEROES);

    return new Promise<Hero[]>(
      resolve => setTimeout(() => resolve(HEROES), 2000)
    );
  }

}
