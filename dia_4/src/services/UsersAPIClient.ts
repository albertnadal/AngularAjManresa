import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from '../models/users';
import { HttpAPIClient } from './HttpAPIClient';
import { Observable } from 'rxjs';

@Injectable()
export class UsersAPIClient extends HttpAPIClient {

  getAllUsers():any {
    return Observable.create(observer => {
      super.getContentFromURL(environment.API_URL+"/users").subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        err => {
          observer.error(err);
        },
        () => {
        }
      );
    });
  }

  createUser(user:User):any {
    return Observable.create(observer => {
      super.postContentToURL(environment.API_URL+"/users", JSON.stringify(user)).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        }, err => {
          observer.error(err);
        }, () => {
        }
      );
    });
  }

  deleteUser(id:number):any {
    return Observable.create(observer => {
      super.deleteContentFromURL(environment.API_URL+"/users/"+id).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        }, err => {
          observer.error(err);
        }, () => {
        }
      );
    });
  }

  updateUser(user:User):any {
    return Observable.create(observer => {
      super.putContentToURL(environment.API_URL+"/users/"+user.Id, JSON.stringify(user)).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        }, err => {
          observer.error(err);
        }, () => {
        }
      );
    });
  }

}
