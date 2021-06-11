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
  animalBird = [];
  animalVal: any = '';
  birdVal: any = '';
  path: string = '';
  value: string = '';
  @Output() passAnimalBird = new EventEmitter<any[]>();
  constructor() {}

  ngOnInit() {
    this.animals = this.animalsBirds.animals;
    this.birds = this.animalsBirds.birds;
  }
  animalChanged(animal) {
    console.log(this.animalVal);
    console.log(animal);
    //let i = this.animalBird.findIndex(el => el.name == this.animalVal);

    if (
      this.animalVal !== '' &&
      this.animalBird.indexOf(this.animalVal) === -1
    ) {
      this.animalBird.push(this.animalVal);
      console.log(this.animalBird);
    } else {
      alert("Empty value and Duplicates can't be added");
    }
    // this.passAnimalBird.emit(animal);
  }

  birdChanged(bird) {
    console.log(this.birdVal);
    console.log(bird);
    if (this.birdVal !== '' && this.animalBird.indexOf(this.birdVal) === -1) {
      this.animalBird.push(this.birdVal);
      console.log(this.animalBird);
    } else {
      alert("Empty value and Duplicates can't be added");
    }
    //this.passAnimalBird.emit(bird);
  }

  dataOnClick() {
    if (this.animalBird.length !== 0) {
      this.animalBird;
      console.log(this.animalBird);
      this.passAnimalBird.emit(this.animalBird);
    } else {
      alert('Can not get empty value');
    }
  }
}
