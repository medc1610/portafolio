import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string): void{
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

