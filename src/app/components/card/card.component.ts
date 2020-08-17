import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent {
  private _selected: boolean;

  @Input() header;
  @Input() body;
  @Input() id;

  @Output() select = new EventEmitter<string>();
  @Output() deselect = new EventEmitter<string>();
  @Output() open = new EventEmitter();

  @Input()
  @HostBinding('class.selected')
  public get selected(): boolean {
    return this._selected;
  }
  public set selected(value: boolean) {
    this._selected = value;
    console.log('selected: ' + value);
  }

  public onOpenClick() {
    // this._elementRef.nativeElement
    this.open.emit();
  }
}
