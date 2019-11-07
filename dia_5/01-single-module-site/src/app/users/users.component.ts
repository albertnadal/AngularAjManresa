import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UsersAPIClient } from '../../services/UsersAPIClient';
import { User } from '../../models/users';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersAPIClient]
})
export class UsersComponent implements OnInit, OnDestroy {

  public users: Array<User> = [];
  public newUser: User = {Id: 0, Name: "", Email: "", City: ""};
  public selectedUser: User = {Id: 0, Name: "", Email: "", City: ""};
  private paramsSubscription: Subscription;

  constructor(private usersAPIClient: UsersAPIClient, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.loadUsers();
    this.paramsSubscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return params.get('id') || "0";
      })
    ).subscribe((id: string) => {
      this.setSelectedUserWithId(Number(id));
    });
  }

  ngOnDestroy() {
    if(this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
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

  setSelectedUserWithId(id: Number) {
    if(!id) return;

    this.usersAPIClient.getUserById(id).subscribe(
      data => {
        this.selectedUser = data;
        for(let i=0; i<this.users.length; i++) {
          if(this.users[i].Id == data.Id) {
            this.users[i] = {...data};
            return;
          }
        }
      },
      err => {
        alert("No s'han pogut obtenir les dades de l'usuari.");
      },
      () => {
      }
    );
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
