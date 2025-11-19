import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CardComponent } from './card/card.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticipationFormComponent } from './participation-form/participation-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventsComponent,
    EventDetailsComponent,
    CardComponent,
    AddEventComponent,
    ParticipationFormComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
      FormsModule
  ]
})
export class EventsModule { }
