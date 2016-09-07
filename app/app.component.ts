import {Component} from '@angular/core';

import {Hero} from './Heroes/hero';

@Component({
  selector: 'my-app',
  template: `
    
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
        <label>id: </label>{{hero.id}}</div>
        <div>
        <label>name: </label>
        <!--{{hero.name}}-->
        <!--<input value="{{hero.name}}"  placeholder="name"/>-->
        <input [(ngModel)]="hero.name"  placeholder="name"/>
    </div>
`
})
export class AppComponent {
  title = 'Tour of Heroes';

  hero: Hero = {
    id: 11,
    name: 'Windstorm'
  };

}
