
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [{Id: 1, Name: "Albert Nadal", Email: "a.nadal@iskra.cat", City: "Manresa"},
                               {Id: 2, Name: "Sílvia Solé", Email: "silvia@silvia.com", City: "Manresa"},
                               {Id: 3, Name: "Pau Nadal", Email: "pau@pau.com", City: "Manresa"},
                               {Id: 4, Name: "Roc Nadal", Email: "roc@roc.com", City: "Manresa"}];

  public newUser: User = {Id: 0, Name: "", Email: "", City: ""};
  public selectedUser: User = {Id: 0, Name: "", Email: "", City: ""};

  constructor() {

  }

  ngOnInit() {

  }

  addUser() {
    this.users.push({...this.newUser});
  }

  delUser(_user: User) {
    this.users = this.users.filter(e => e !== _user);
  }

  setSelectedUser(_user: User) {
    this.selectedUser = {..._user};
  }

  deleteUserWithId(userId: number) {
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].Id == userId) {
        this.delUser(this.users[i]);
        return;
      }
    }
  }

  updateUser(_user: User) {
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].Id == _user.Id) {
        this.users[i] = {..._user};
        return;
      }
    }
  }

}
