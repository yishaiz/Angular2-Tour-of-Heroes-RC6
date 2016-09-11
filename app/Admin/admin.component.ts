import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  styles:[`
    h3{
        color:red;
    }
  `],

  template: `

<h2>Administrator Area</h2>
<h3>
    You should not be here
</h3>
`
})
export class AdminComponent {

}
