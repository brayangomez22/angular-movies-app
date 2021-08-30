import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      if (this.moviesService.loading) {
        return;
      }

      this.moviesService.getBillboard().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getBillboard().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

  ngOnDestroy() {
    this.moviesService.resetBillboardPage();
  }
}
