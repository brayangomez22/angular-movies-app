import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[] | undefined;

  constructor() {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }
}
