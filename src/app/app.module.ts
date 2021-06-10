import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TitleComponent } from './Title.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ImageDisplayComponent } from './image-display/image-display.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TitleComponent, DropdownsComponent, ImageDisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
