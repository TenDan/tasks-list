import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { NoListComponent } from './no-list/no-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListComponent,
    TaskComponent,
    HomeComponent,
    NoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
