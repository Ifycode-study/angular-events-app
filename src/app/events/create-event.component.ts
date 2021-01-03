import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }

    .error input {
      background-color: #e3c3c5;
    }

    .error ::-webkit-input-placeholder {
      color: #999;
    }

    .error ::-moz-placeholder {
      color: #999;
    }

    .error :-moz-placeholder {
      color: #999;
    }

    .error :ms-input-placeholder {
      color: #999;
    }
  `]
})
export class CreateEventComponent {
  event: any;

  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) {

  }

  ngOnInit() {
    this.event = {
      name: 'Ng Spectacular',
      date: new Date('8/8/2028'),
      time: '10:00 am',
      price: 799.99,
      location: {
        address: '100 kings road',
        city: 'Lagos',
        country: 'Nigeria'
      },
      onlineUrl: 'https://ngSpectacular.com',
      imageUrl: 'http://localhost:4200/assets/images/angularconnect-shield.png'
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
