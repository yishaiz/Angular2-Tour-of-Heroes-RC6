import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard',

  template: `
    <h1>Another Component</h1>
    <h3>name from input : {{name}}  </h3>
`
})
export class AnotherComponent {
  // @Input()
  name: string;

  constructor() {
    console.log(this.name);
  }
}
