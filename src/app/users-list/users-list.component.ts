import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList = [];

  constructor(public usersService: UsersService) { }

  ngOnInit(): Array<User> {
    return this.usersList = this.usersService.getUsersList();
  }

  search(value: string): Array<User> {
    return this.usersList = this.usersService.findUserByName(value);
  }

  sort(value): Array<User> {
    return this.usersList = this.usersService.sortUsersByAlphabet(value);
  }
}
