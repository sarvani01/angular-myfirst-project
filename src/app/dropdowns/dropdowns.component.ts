import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {
    this.animals = this.animalsBirds.animals;
    this.birds = this.animalsBirds.birds;
  }
}
