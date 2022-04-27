import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NoteListComponent } from './note-list/note-list.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { RegisterComponent } from 'src/app/register/register.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NoteListComponent
  ],
  imports: [
    CardModule,
    ButtonModule,
    InputTextareaModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
