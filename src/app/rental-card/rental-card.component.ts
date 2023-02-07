import { Component, Input } from '@angular/core';

@Component({
  selector: 'rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.css'],
})
export class RentalCardComponent {
  @Input() numRented;
  @Input() listRented;

}
