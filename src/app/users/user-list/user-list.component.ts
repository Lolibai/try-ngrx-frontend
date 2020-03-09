import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUserActions from '../user.actions';
import { User } from '../user.model';
import * as fromStore from '../user.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(fromStore.getAllUsers);

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.store.dispatch(fromUserActions.getUsers());
  }

  removeUser(id) {
    this.store.dispatch(fromUserActions.deleteUserRequest({ id }));
  }
}
