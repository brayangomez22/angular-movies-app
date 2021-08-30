import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.movieService.getMovieDetail(id).subscribe((movie) => {
      console.log(movie);
    });
  }
}
