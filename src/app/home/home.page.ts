import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  isModalOpen = false;

  value: number = 52.3;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  slideOpts = {
    slidesPerView: 2.5,
    spaceBetween: 5,
    centeredSlides: false
  };
  sliderConfig = {
    slidesPerView: 2.3,
    spaceBetween: 10,
    centeredSlides: false
  };
  constructor() {}

}
