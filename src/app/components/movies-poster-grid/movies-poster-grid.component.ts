import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.scss'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onMovieClick(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }
}
