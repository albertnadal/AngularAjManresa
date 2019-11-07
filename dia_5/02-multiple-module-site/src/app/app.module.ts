import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpAPIClient } from '../services/HttpAPIClient';
import { UsersAPIClient } from '../services/UsersAPIClient';
import { RSSClient } from '../services/RSSClient';

import {
  MatInputModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpAPIClient,
    UsersAPIClient,
    RSSClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
