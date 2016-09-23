import { Injectable } from '@angular/core';
import { Hero }       from './Hero';
import { Http, Headers, Response } from "@angular/http";
import { getHeroUrl, getSelectedEnvironment, getObjectFromResponse } from './heroes-service.config';

import 'rxjs/add/operator/toPromise';

// import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroesService {

  // private heroesUrl = 'app/heroes';  // URL to web api

  environment: any;
  heroUrl: string;

  constructor(private http: Http) {
    //   debugger;
    this.environment = getSelectedEnvironment();
    this.heroUrl = getHeroUrl(this.environment);
  }

  getHeroes(): Promise<Hero[]> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');


    // return this.http.get(heroesUrl,null,{headers: headers})
    // return this.http.get(heroesUrl)
    return this.http.get(this.heroUrl)
      .toPromise()
      .then(response => {

        // debugger;
//         console.log(response);
//         console.log(response.json());
//         console.log(response.json().data);

        // let result = response.json().data ;
        // let result = JSON.parse(response._body);

        // return response.json().data as Hero[];

        let result = getObjectFromResponse(this.environment, response);

        return result as Hero[];
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
    const url = `${this.heroUrl}/${id}`;
    console.log('url', url);

    return this.http.get(url)
      .toPromise()
      .then(response => getObjectFromResponse(this.environment, response) as Hero)
      // .filter((item: Hero) => item.id == id)[0] as Hero)
      .catch(this.handleError);
  }

  /*
   getHero(id: number): Promise<Hero> {
   return this.http.get(this.heroUrl)
   .toPromise()
   .then(response => getObjectFromResponse(this.environment, response)
   .filter((item: Hero) => item.id == id)[0] as Hero)
   .catch(this.handleError);
   }
   */


  /*
   let headers = new Headers({
   'Content-Type': 'application/json'
   });

   */


  // Add new Hero
  create(heroName: string): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.heroUrl, JSON.stringify({ name: heroName }),
        {
          headers: headers
        })
      .toPromise()
      .then(response => {
        // debugger;
        //return
        // this.getHeroes();

        console.log("created hero - ", getObjectFromResponse(this.environment, response) as Hero);

        return getObjectFromResponse(this.environment, response) as Hero;
        // return Promise.resolve(getObjectFromResponse(this.environment, response) as Hero);
        // return getObjectFromResponse(this.environment, response) as Hero;

      })
      // .then(response => getObjectFromResponse(this.environment, response))
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let url = `${this.heroUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(hero: Hero): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroUrl}/${hero.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }


  /*
   getHero(id: number): Promise<Hero> {
   return this.http.get(this.heroesUrl)
   .toPromise()
   .then(response => response.json().data
   .filter((item: Hero) => item.id == id)[0] as Hero)
   .catch(this.handleError);
   }
   */


  getHeroEs5(id: number): Promise<Hero> {
    return this.http.get(this.heroUrl)
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
