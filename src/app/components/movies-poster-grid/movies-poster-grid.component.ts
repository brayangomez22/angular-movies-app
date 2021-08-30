import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.scss'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
