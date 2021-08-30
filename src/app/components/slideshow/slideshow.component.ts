import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() movies: Movie[] | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
}
