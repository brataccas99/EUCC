import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  constructor() {}

  slides: any;

  ngOnInit(): void {
    this.slides = [
      { img: '../../../assets/images/contracts.jpeg' },
      { img: '../../../assets/images/flags.jpg' },
      { img: '../../../assets/images/stars.jpeg' },
    ];
  }
}
