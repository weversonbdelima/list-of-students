import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { MessagesComponent } from './messages/messages.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    MessagesComponent,
    StudentsFormComponent,
    StudentsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
