import { Injectable } from '@angular/core';
import { Hero }       from './Hero';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs';
import { getHeroUrl, getSelectedEnvironment, getObjectFromResponse } from './heroes-service.config';

@Injectable()
export class HeroSearchService {

  environment: any;
  heroUrl: string;

  constructor(private http: Http) {
    this.environment = getSelectedEnvironment();
    this.heroUrl = getHeroUrl(this.environment);
  }

  search(term: string): Observable<Hero[]> {
    let url = `${this.heroUrl}/?name=${term}`;

    console.log('url', url);

    // console.log('search service - ', term);

    return this.http
      .get(url)
      .map((response: Response) => getObjectFromResponse(this.environment, response) as Hero[]
      );
  }

}


/*
 return this.http
 .get(url)
 .map((response: Response) => {

 let result: any = response.json().data as Hero[];
 console.log(result);

 return response.json().data as Hero[];

 }
 );
 */
