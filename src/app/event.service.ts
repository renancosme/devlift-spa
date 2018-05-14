import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Event } from './events/event';
import { EventPageResult } from './events/event-page-result';
import { environment } from '../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {

  private eventsUrl = environment.devLiftBackendApiUrl;
  private queryString: string;
  
  constructor(private http: HttpClient) { }
  
  getEvents(pageIndex: number, pageSize: number): Observable<EventPageResult> {   
    this.queryString = `${this.eventsUrl}/${pageIndex}/${pageSize}`;    
    return this.http.get<EventPageResult>(this.queryString);
  }

  getEvent(id: number){
    this.queryString = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(this.queryString);
  }

  createEvent(event: Event)
  {        
    this.http.post(this.eventsUrl, event)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured on event create");
          console.log(err.error);
        }
      );
  }

  editEvent(event: Event)
  {
    this.queryString = `${this.eventsUrl}/${event.id}`;
    this.http.put(this.queryString, event)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured on event update");
          console.log(err.error);
        }
      );
  }

  removeEvent(id: number): Observable<Event> {    
    const url = `${this.eventsUrl}/${id}`;
    return this.http.delete<Event>(url, httpOptions);
  }
}