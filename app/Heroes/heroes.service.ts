import { Injectable } from '@angular/core';
import { Hero }       from './Hero';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroesService {

  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) {
  }


  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {

        console.log(response);
        console.log(response.json());
        console.log(response.json().data);

        return response.json().data as Hero[];
      })
      .catch(this.handleError);
  }


  /*
   getHeroes(): Promise<Hero[]> {
   return this.http.get(this.heroesUrl)
   .toPromise()
   .then(response => response.json().data as Hero[])
   .catch(this.handleError);
   }
   */


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  /* response=>{
   console.log(response);
   console.log(response.json());
   console.log(response.json().data);
   return response.json().data as Hero[]
   }*/


  // getHeroes(): Promise<Hero[]> {


  getHero(id: number): Promise<Hero> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data
        .filter((item: Hero) => item.id == id)[0] as Hero)
      .catch(this.handleError);
  }


  getHeroEs5(id: number): Promise<Hero> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data
        .filter(function (item: Hero) {
          return item.id == id;
        })[0] as Hero)
      .catch(this.handleError);
  }

  /* this.getHeroes()
   .then((response)=> {
   console.log(response);
   return     Promise.resolve(response[0]);
   })
   .catch(this.handleError);
   */


  //old methods:


  /*
   getHeroes() {
   console.log("heroes", HEROES);

   // return HEROES;
   return Promise.resolve(HEROES);
   }



   getHero(id: number) {
   return Promise.resolve(
   HEROES.find(hero => hero.id == id)
   );
   }

   getHeroesSlowly() {
   // return Promise.resolve(HEROES);

   return new Promise<Hero[]>(
   resolve => setTimeout(() => resolve(HEROES), 2000)
   );
   }
   */
}
