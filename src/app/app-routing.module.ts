import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { LidtEventComponent } from './features/events/list-event/list-event.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {path:'' , redirectTo:"home",pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'list' , component:LidtEventComponent,children:[
      {path:'test' , component:HomeComponent}
  ]},
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'tickets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
  {path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
