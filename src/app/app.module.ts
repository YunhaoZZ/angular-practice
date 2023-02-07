import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RentalCardComponent } from '/rental-card/rental-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, RentalCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
