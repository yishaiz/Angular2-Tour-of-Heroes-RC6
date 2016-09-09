import { Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  styles: [`
        h1{
            color:red;
        }
        
        img{
            width:200px;
        }
        
        img.little{
            width:120px;
        }
`
  ],
  template: `
 
    <h1>Page not found !</h1>

    <img src="../images/sad.gif"/>
    <img src="../images/girl-with-yellow-sad-smiley-balloon-32716672.jpg"/>
    <img src="../images/poop-emoji-emoticon-600-300x300.jpg" class="little"/>
     

`
})
export class PageNotFoundComponent {


}
