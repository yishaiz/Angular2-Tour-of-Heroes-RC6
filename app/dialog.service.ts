import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class DialogService {
  /*
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns promise resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string) {
    return new Promise<boolean>((resolve, reject) =>
      resolve(window.confirm(message || 'Is it OK?')));
  };


  confirm2(message?: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        let ok = window.confirm(message || 'Is it OK?') ;
        return resolve(ok);
      },  0);
    })
    // Todo: good during development; delete
      .then(ok => {
        console.log('confirm said: ' + ok);
        return ok;
      });
  }
}
