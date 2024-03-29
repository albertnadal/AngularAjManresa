import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpAPIClient } from '../services/HttpAPIClient';
import { UsersAPIClient } from '../services/UsersAPIClient';
import { RSSClient } from '../services/RSSClient';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  DateAdapter,
  NativeDateAdapter,
  MatRadioModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    NewsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    HttpAPIClient,
    UsersAPIClient,
    RSSClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
