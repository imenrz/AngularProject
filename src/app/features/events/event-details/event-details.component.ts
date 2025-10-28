import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  id!:number;
  constructor(private actRoute:ActivatedRoute){}

  ngOnInit(){
    console.log(this.actRoute);
    this.id=(this.actRoute.snapshot.paramMap.get('id'))?
    parseInt(this.actRoute.snapshot.paramMap.get('id')!):0;
   }
}
