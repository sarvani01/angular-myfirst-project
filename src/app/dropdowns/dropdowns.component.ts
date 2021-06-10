import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimalsBirds } from '../AnimalsBirds';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  animalsBirds: AnimalsBirds = new AnimalsBirds();
  animals = [];
  birds = [];
  animalVal: string = '';
  birdVal: string = '';
  path: string = '';
  value: string = '';
 
  constructor() {}

  ngOnInit() {
    this.animals = this.animalsBirds.animals;
    this.birds = this.animalsBirds.birds;
  }
  animalChanged(animal) {
    console.log(this.animalVal);
    console.log(animal);
  }

  birdChanged(bird) {
    console.log(this.birdVal);
    console.log(bird);
  }

 
}
