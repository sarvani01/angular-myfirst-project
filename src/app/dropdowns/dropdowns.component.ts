import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  animalVal: any = '';
  birdVal: any = '';
  path: string = '';
  value: string = '';
  @Output() passAnimalBird = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
    this.animals = this.animalsBirds.animals;
    this.birds = this.animalsBirds.birds;
  }
  animalChanged(animal) {
    console.log(this.animalVal);
    console.log(animal);
    this.passAnimalBird.emit(animal);
  }

  birdChanged(bird) {
    console.log(this.birdVal);
    console.log(bird);
    this.passAnimalBird.emit(bird);
  }
}
