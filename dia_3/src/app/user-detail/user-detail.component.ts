import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/users';

@Component({
  selector: 'UserDetail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = {Id: 0, Name: "", Email: "", City: ""};

  constructor() { }

  ngOnInit() {
  }

}
