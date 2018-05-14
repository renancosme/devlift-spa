import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Declarations
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { HomeComponent } from './home/home.component';
import { EventFormComponent } from './event-form/event-form.component'

//Imports
import { routing } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';

//Providers
import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailsComponent,
    HomeComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    MaterializeModule
  ],
  providers: [EventService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
