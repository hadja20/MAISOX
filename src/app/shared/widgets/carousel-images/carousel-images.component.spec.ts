import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImagesComponent } from './carousel-images.component';

describe('CarouselImagesComponent', () => {
  let component: CarouselImagesComponent;
  let fixture: ComponentFixture<CarouselImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselImagesComponent]
    });
    fixture = TestBed.createComponent(CarouselImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
