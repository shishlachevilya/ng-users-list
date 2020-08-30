import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shared/user';
import {MatListOption} from '@angular/material/list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList = [];
  name: string;
  userName: string;
  role: string;
  selectedList: Array<User>;
  isValid: boolean;

  constructor(public usersService: UsersService) { }

  ngOnInit(): Array<User> {
    this.isValid = false;

    return this.usersList = this.usersService.getUsersList();
  }

  search(value: string): Array<User> {
    return this.usersList = this.usersService.findUserByName(value);
  }

  sort(value): Array<User> {
    return this.usersList = this.usersService.sortUsersByAlphabet(value);
  }

  add(): void {
    this.usersService.addNewUser({
      id: Math.floor((Math.random() * 6) + 10),
      name: this.name,
      username: this.userName,
      email: '',
      role: this.role || 'User',
      phone: '',
      website: ''
    });

    this.usersList = this.usersService.getUsersList();
    this.name = null;
    this.userName = null;
    this.role = null;
    this.isValid = false;
  }

  valid(): void {
    if (this.userName && this.name) {
      this.isValid = true;
    }
  }

  selectItem(users: MatListOption[]): void {
    this.selectedList = [];

    users.forEach((element) => {
      this.selectedList.push(element.value);
    });
  }

  deleteUsers(): void {
    this.usersService.deleteUsers(this.selectedList);
    this.usersList = this.usersService.getUsersList();
  }
}
