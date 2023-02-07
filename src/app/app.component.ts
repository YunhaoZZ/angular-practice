import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num_of_rented: number = 4;
  list_of_rented: string[] = [
    'Cats',
    'Howard the Duck',
    'Jack and Jill',
    'Batman and Robin',
  ];

  constructor() {}

  UpdateRentalList(newMovie: string) {
    this.list_of_rented.push(newMovie);
    this.num_of_rented += 1;
  }

  wingCommander = {
    title: 'Wing Commander',
    yearReleased: 1999,
    rating: 'PG-13',
    imdbLink: 'https://www.imdb.com/title/tt0131646/',
    soundtrack: {
      spotifyLink:
        'https://open.spotify.com/album/6kYCucnWN8EzKDCro12m5x?si=rR_Sb8NbQ62AYQHjN6tlXw',
    },
  };

  theRoom = {
    title: 'The Room',
    year: 2003,
    stars: 3.7,
    rating: 'R',
    director: 'Tommy Wiseau',
    cast: ['Tommy Wiseau', 'Juliette Danielle', 'Greg Sestero'],
    imdblink: 'https://www.imdb.com/title/tt0368226/',
    image: '/images/the-room.jpg',
  };
}
