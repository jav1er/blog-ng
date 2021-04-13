import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  title: string = 'Componente peliculas';
  arrayMovies: Array<Movie>;
  movieSeleced: Movie;
  constructor() {
    this.arrayMovies = [
      new Movie('Spiderman', 2000, ''),
      new Movie('Avengers', 2015, ''),
      new Movie('Batman', 2012, ''),
    ];
  }

  ngOnInit(): void {}

  showFavorite(event) {
    this.movieSeleced = event;
    console.log(this.movieSeleced);
  }
}
