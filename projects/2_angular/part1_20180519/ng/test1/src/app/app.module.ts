import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ListComponent} from '../list/list.component';
import {ListModule} from '../list/list.module';

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
