import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
