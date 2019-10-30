import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User, Gender, Profession } from '../../models/users';

interface GenderData {
    [key: string]: Gender;
}

interface ProfessionData {
    [key: string]: Profession;
}

@Component({
  selector: 'UserDetail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = {Id: 0, Name: "", Email: "", City: ""};
  @Output() public didDeleteUser:EventEmitter<User> = new EventEmitter();
  @Output() public didUpdateUser:EventEmitter<User> = new EventEmitter();

  public genders: GenderData = { "Home": Gender.MALE, "Dona": Gender.FEMALE};
  public professions: ProfessionData = { "Sense feina": Profession.UNEMPLOYED, "Enginyer": Profession.ENGINEER, "Advocat": Profession.LAWYER, "Conductor": Profession.DRIVER, "Mestre": Profession.TEACHER, "Estudiant": Profession.STUDENT };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  delUser() {
    this.didDeleteUser.emit(this.user);
    this.user = {Id: 0, Name: "", Email: "", City: ""};
    this.router.navigate(['/users']);
  }

  saveChanges() {
    this.didUpdateUser.emit(this.user);
  }

}
