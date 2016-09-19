import { Injectable } from '@angular/core';
import { Hero }       from './Hero';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {

  }

  search(term: string): Observable<Hero[]> {
    let url = `app/heroes/?name=${term}`;

    // console.log(url);
    // console.log('search service - ', term);

    return this.http
      .get(url)
      .map((response: Response) => response.json().data as Hero[]
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
