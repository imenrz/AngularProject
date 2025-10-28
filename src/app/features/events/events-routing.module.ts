import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { LidtEventComponent } from './list-event/list-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [{ path: '', component: EventsComponent, 
  children : [

    {path: '',component:LidtEventComponent},
    {path:':id',component:EventDetailsComponent}

  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
