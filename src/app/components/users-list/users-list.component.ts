import { Component } from '@angular/core';
import { User } from '../../models';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent {
  usersList: User[] = [
    { name: 'Mahmoud Abdelaziz', age: 25 },
    { name: 'Omar ', age: 30 },
    { name: 'Mohamed Adel ', age: 40 },
    { name: 'Ayman', age: 35 },
    { name: 'Ahmed Abdelaziz', age: 20 },
  ];
}
