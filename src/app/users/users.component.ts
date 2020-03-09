import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromUserActions from './user.actions';
import * as fromStore from './user.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = new FormGroup({
    name: new FormControl('')
  });

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {}

  addNewUser() {
    this.store.dispatch(
      fromUserActions.addUserRequest({ user: this.user.value })
    );
    this.user.reset();
  }
}
