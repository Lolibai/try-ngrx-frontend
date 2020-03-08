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
  users$: Observable<User[]>;

  constructor(private store: Store<fromStore.State>) {
    this.users$ = store.select(fromStore.selectAll);
  }

  ngOnInit() {
    this.store.dispatch(fromUserActions.getUsers());
  }
}
