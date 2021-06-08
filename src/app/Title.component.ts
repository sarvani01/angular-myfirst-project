import { Component } from '@angular/core';

@Component({
  selector: 'mytitle',
  template: `
    <h1>Animals and Birds</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
        text-align: center;
      }
    `
  ]
})
export class TitleComponent {}
