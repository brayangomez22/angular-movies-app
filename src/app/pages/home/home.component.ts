import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      this.moviesService.getBillboard().subscribe((resp) => {
        this.movies.push(...resp.results);
      });
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getBillboard().subscribe((resp) => {
      this.movies = resp.results;
      this.moviesSlideshow = resp.results;
    });
  }
}
