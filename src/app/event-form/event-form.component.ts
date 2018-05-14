import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'devlift-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  id: number;
  
  event: any = {
    id: 0,
    name: '',
    when: ''
  };

  inscription: Subscription;

  constructor(
    private eventService: EventService, 
    private location: Location,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    
    if(this.id > 0)
    {
      this.event = this.eventService.getEvent(this.id)
        .subscribe(e => this.event = e);
    }    
  }
  
  onSubmit(){
    
    if(this.id > 0)
    {
      this.eventService.editEvent(this.event);
    }
    else
    {
      this.eventService.createEvent(this.event);
    }

    this.goBack();
  }

  ngOnDestroy(){    
    this.inscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
