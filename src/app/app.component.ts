import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'moviesApp';

  constructor(private moviesService: MoviesService) {
    this.moviesService.getBillboard().subscribe((resp) => {
      console.log(resp);
    });
  }
}
