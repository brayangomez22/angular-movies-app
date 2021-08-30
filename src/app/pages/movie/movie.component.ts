import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movie: MovieResponse | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.movieService.getMovieDetail(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  onPrev() {
    this.location.back();
  }
}
