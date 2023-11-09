import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private lastScrollTop = 0;

  constructor() {
    window.addEventListener('scroll', () => {
      this.detectScrollDirection();
    });
  }

  private detectScrollDirection() {
    const st = window.pageYOffset;

    if (st > this.lastScrollTop) {
      // Scrolling down
      this.addScrollingClass();
    } else {
      // Scrolling up
      this.addScrollingUpClass();
    }

    this.lastScrollTop = st;
  }

  private addScrollingClass() {
    const element = document.querySelector('.smart-scroll');
    element!.classList.remove('scrolling-up');
    element!.classList.add('scrolling');
  }

  private addScrollingUpClass() {
    const element = document.querySelector('.smart-scroll');
    element!.classList.remove('scrolling');
    element!.classList.add('scrolling-up');
  }
}
