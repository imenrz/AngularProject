import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { futurDateValidator } from '../../../../shared/validators/futur-date.validator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'] 
})
export class AddEventComponent implements OnInit {

  eventForm!: FormGroup; 
  //FormGroup variable peut regrouper plusieurs input 
  
  ngOnInit(): void { 
    this.eventForm = new FormGroup({
      title: new FormControl('', [   
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30)
      ]),

      date: new FormControl('', [Validators.required, futurDateValidator(5)]),

      lieu: new FormControl('', Validators.required),
      prix: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$')
      ]),
    
      imageUrl: new FormControl(''),
      nbPlaces: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$|^100$')
      ]),


      domaines : new FormArray([new FormControl('')])
    });
  }


  get title ()
  {return this.eventForm.get('title')}
   get date ()
  {return this.eventForm.get('date')}

  onSubmit(){
    //this.eventService.addEvent(event)
    return console.log(this.eventForm.value);
  }

  get domaines() {return this.eventForm.get('domaines') as FormArray; }

  addDomain() { this.domaines.push(new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]));}
}
