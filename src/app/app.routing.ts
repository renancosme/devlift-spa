import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { EventsComponent } from './events/events.component'
import { EventDetailsComponent } from './event-details/event-details.component'
import { EventFormComponent } from './event-form/event-form.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'events', component: EventsComponent },
    { path: 'create', component: EventFormComponent},
    { path: 'detail/:id', component: EventDetailsComponent },
    { path: 'edit/:id', component: EventFormComponent },
    { path: 'eventPage/:pageIndex/:pageSize', component: EventsComponent },    
];

export const routing: ModuleWithProviders = 
    RouterModule.forRoot(APP_ROUTES);