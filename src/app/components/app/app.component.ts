import { Component } from '@angular/core';

import { DATA } from './app.data';

import { IUser } from '../../interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public data: IUser[];

  public selected;

  public onOpen(id) {
    this.selected = id;
  }
}
