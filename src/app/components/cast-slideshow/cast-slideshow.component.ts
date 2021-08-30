import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.scss'],
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  @Input() cast: Cast[] | undefined;
  public swiper: Swiper | undefined;

  constructor() {}

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
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
