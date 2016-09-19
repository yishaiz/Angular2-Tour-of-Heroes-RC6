import { Injectable } from '@angular/core';
import { Hero }       from './Hero';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {

  }

  search(term: string): Observable<Hero[]> {
    let url = 'app/heroes/?name=${term}';

    return this.http
      .get(url)
      .map((response: Response) => response.json().data as Hero[]);
  }

}
