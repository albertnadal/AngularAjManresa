import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

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
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
  ]
})
export class UsersModule { }
