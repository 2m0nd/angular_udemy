import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../app.userService';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  users: string[];

    constructor(private userService: UserService) {
      this.users = userService.inactiveUsers;
    }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
