import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { SideBarComponent } from './interface/sidebar/sidebar.component';
import { Header } from './interface/header/header.component';
import { SettingsComponent } from './page/settings/settings.component';
import { CreateNotesComponent } from './page/createNotes/create-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './page/signup/signup.component';
import { loginComponent } from './page/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NotesFormComponent } from './component/notes-form/notes-form.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ToastrModule.forRoot(),
    CommonModule,
    
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    loginComponent,
    HomeComponent,
    SideBarComponent,
    Header,
    SettingsComponent,
    CreateNotesComponent,
    NotesFormComponent

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
