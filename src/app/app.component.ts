import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-menu></app-nav-menu>
    <div class="container mt-2">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {  
  constructor() { }
}
