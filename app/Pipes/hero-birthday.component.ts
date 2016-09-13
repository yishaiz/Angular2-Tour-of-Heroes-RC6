import {Component} from '@angular/core';

@Component({
    selector: 'hero-birthday',
    styles: [`
    h3{
        color:green;
    }
`],
    template: `
        The hero's birthday is :
        <div>{{ birthday }}</div>
        
        <h3>with pipe | date:</h3>
        <div>{{ birthday | date }}</div>

        <h3>with pipe - long date:</h3>
        <div>{{ birthday | date : 'longDate'}}</div>

<h3>with pipe - short date:</h3>
        <div>{{ birthday | date : 'shortDate'}}</div>
<hr/>
nullable:
<h3>birthday - nullable:</h3>
        <div>{{ myHero?.date | date : 'shortDate'}}</div>
        
<h3>other way</h3>
<div>{{ myHero && myHero.date | date : 'shortDate'}}</div>

<hr/>
json: {{myHero | json}}
<hr/>
<h2>more samples</h2>
dd/MM/yy
 <div>{{ birthday | date : 'dd/MM/yy'}}</div>

`
})
export class HeroBirthdayComponent {
    birthday = new Date(1988, 3, 15); // April 15, 1988

    myHero = {
        name: 'Bar',
        date: new Date(1988, 3, 15)
    }

    birthday22 : any = null;//new Date(1988, 3, 15); // April 15, 1988
}