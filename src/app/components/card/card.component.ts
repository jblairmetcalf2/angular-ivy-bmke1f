import { Component } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent {
  public header = 'My fancy header';
  public body = 'My schmancy paragraph';

  public onOpenClick() {
    console.log('Hola!');
  }
}
