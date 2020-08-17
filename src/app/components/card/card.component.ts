import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent {
  @Input()
  public header = 'My fancy header';

  @Input()
  public body = 'My schmancy paragraph';

  public onOpenClick() {
    console.log('Hola!');
  }
}
