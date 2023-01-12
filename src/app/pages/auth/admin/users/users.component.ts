import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: { id: number, name: string, email: string }[] = [
    {
      id: 1,
      name: 'Arthur Bleil',
      email: 'arthur.bleil@zup.com.br',
    },
    {
      id: 2,
      name: 'Tiago Peres França',
      email: 'tiago.franca@zup.com.br',
    },
    {
      id: 3,
      name: 'Victor Martins Rabelo',
      email: 'victor.rabelo@zup.com.br',
    },
  ]
}
