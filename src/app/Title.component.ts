import { Component } from '@angular/core';

@Component({
  selector: 'title',
  template: `
    <h1>Animals and Birds</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
        display: inline;
      }
    `
  ]
})
export class TitleComponent {}
