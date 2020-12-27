import { Component } from '@angular/core';

@Component({
  selector: 'inter',
  template:`
  <h2>{{user.name}}</h2>
  <img [src]="user.imageUrl">
  <button (click)="doSomething()">Click Me</button>
  `
})
export class InterpolationComponent {
  user = {
    name: 'John Doe',
    imageUrl: '/assets/images/angularconnect-shield.png'
  }

  doSomething() {
    console.log('Done!');
  }

  /*
  interpolation:
  <h2>{{user.name}}</h2>

  property binding:
  <img [src]="user.imageUrl">

  event binding:
  <button (click)="doSomething()"></button>
  */
}
