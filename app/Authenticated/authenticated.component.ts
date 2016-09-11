import { Component } from '@angular/core';

@Component({
  selector: 'authenticated',
  styles: [`
    h3{
        color:green;
    }
    `],
  template: `

<h2>Authenticated Area</h2>
<h3>
    Only logged in users should be here
</h3>
`
})
export class AuthenticatedComponent {

}
