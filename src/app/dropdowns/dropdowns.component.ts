import { Component, OnInit,Output,EventEmitter } from '@angular/core';
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
  path:string ='';
 @Output() animalLink = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.animals = this.animalsBirds.animals;
    this.birds = this.animalsBirds.birds;
  }
  onSelectAnimal(){
    this.animalLink.emit(this.path);
  }
}
