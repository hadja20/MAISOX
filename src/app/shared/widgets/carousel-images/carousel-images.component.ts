import { Component, Input } from '@angular/core';
import { Image } from '../../models/image';
import { ImagesMock } from '../../mocks/Images.mock';

@Component({
  selector: 'app-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.scss'],
})
export class CarouselImagesComponent {
  /**
   * Image to display in carousel
   */
  @Input()
  images: Image[] = ImagesMock;
}
