import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventPageResult } from './event-page-result'
import { Event } from './event'

@Component({
  selector: 'devlift-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventPageResult: EventPageResult;
  pageIndex: number = 1;
  pageSize: number = 10;

  constructor(private eventService: EventService) {     
  }

  ngOnInit() {
    this.eventService.getEvents(this.pageIndex, this.pageSize)
        .subscribe(eventsList => this.eventPageResult = eventsList);         
  }

  remove(event){    
    this.eventPageResult.events = this.eventPageResult.events
                                        .filter(e => e !== event);
                                            
    this.eventService.removeEvent(event.id).subscribe();
  }
}
