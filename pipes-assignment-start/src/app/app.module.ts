import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InversePipePipe } from './inverse-pipe.pipe';
import { SortPipePipe } from './sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InversePipePipe,
    SortPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
