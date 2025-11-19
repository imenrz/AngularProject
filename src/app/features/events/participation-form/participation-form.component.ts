import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent {
  id!: number;
  price: number = 0;
  nbPlaces: number = 0;
  total: number = 0; 

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    console.log('Tous les params:', this.activatedRoute.snapshot.params);
    
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.price = Number(this.activatedRoute.snapshot.params['prix']);  // ✅ Changé 'price' en 'prix'
    
    console.log('ID:', this.id);
    console.log('Price:', this.price);
  }

  calculerTotalPrice(nbplace: number | string) {
    const nbP = Number(nbplace);
    
    if (nbP > 0 && !isNaN(nbP) && this.price > 0) {
      this.total = nbP * this.price;
    } else {
      this.total = 0;
    }
  }
}