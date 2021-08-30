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
  public swiper: Swiper | undefined;

  constructor() {}

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  ngOnInit(): void {}

  onSlidePrev() {
    if (this.swiper != null) {
      this.swiper.slidePrev();
    }
  }

  onSlideNext() {
    if (this.swiper != null) {
      this.swiper.slideNext();
    }
  }
}
