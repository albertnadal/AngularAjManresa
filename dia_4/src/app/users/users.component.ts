import { Component, OnInit } from '@angular/core';
import { UsersAPIClient } from '../../services/UsersAPIClient';
import { User } from '../../models/users';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersAPIClient]
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];
  public newUser: User = {Id: 0, Name: "", Email: "", City: ""};
  public selectedUser: User = {Id: 0, Name: "", Email: "", City: ""};

  constructor(private usersAPIClient: UsersAPIClient) {

  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersAPIClient.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        alert("No s'ha pogut obtenir el llistat d'usuaris.");
      },
      () => {
      }
    );
  }

  addUser() {
    this.usersAPIClient.createUser(this.newUser).subscribe(
      data => {
        this.users.push({...this.newUser});
        this.newUser = {Id:0, Name: "", Email: "", City: ""};
      },
      err => {
        alert("No s'ha pogut crear l'usuari.");
      },
      () => {
      }
    );
  }

  delUser(_user: User) {
    this.usersAPIClient.deleteUser(_user.Id).subscribe(
      data => {
        this.users = this.users.filter(e => e.Id !== _user.Id);
      },
      err => {
        alert("No s'ha pogut eliminar l'usuari.");
      },
      () => {
      }
    );
  }

  setSelectedUser(_user: User) {
    this.selectedUser = {..._user};
  }

  updateUser(_user: User) {
    this.usersAPIClient.updateUser(_user).subscribe(
      data => {
        for(let i=0; i<this.users.length; i++) {
          if(this.users[i].Id == _user.Id) {
            this.users[i] = {..._user};
            return;
          }
        }
      },
      err => {
        alert("No s'ha pogut actualitzar l'usuari.");
      },
      () => {
      }
    );

  }

}
