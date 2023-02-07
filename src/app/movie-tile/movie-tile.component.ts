import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css'],
})
export class MovieTileComponent implements OnInit {
  @Input() movie;
  @Output() onRentAdded = new EventEmitter<string>();

  constructor() {}

  OnClickBtnRent() {
    console.log('clicked', this.movie);
    this.onRentAdded.emit(this.movie.title);
  }

  ngOnInit() {}
}
