import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() event!: Event;

constructor(private router: Router) { }

participate(event: any) {
  this.router.navigate(['/events/participate', event.id, event.prix]);
}

}
