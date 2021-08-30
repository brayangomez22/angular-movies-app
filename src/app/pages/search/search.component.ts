import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/billboard-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public text: string = '';
  movies: Movie[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parans) => {
      this.text = parans.text;
      this.moviesService.searchMovies(parans.text).subscribe((movies) => {
        this.movies = movies;
      });
    });
  }
}
