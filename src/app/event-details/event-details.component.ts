import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { EventService } from '../event.service'; 

@Component({
  selector: 'devlift-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id: number;
  inscription: Subscription;
  event: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );

    this.event = this.eventService.getEvent(this.id)
      .subscribe(e => this.event = e);
  } 

  ngOnDestroy(){    
    this.inscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
