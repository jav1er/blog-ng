import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() propMovie: Movie;
  @Output() selectFavorite = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  select(event, movie) {
    this.selectFavorite.emit(movie);
  }
}
