import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as FeatureActions from '../user.actions';
import { User } from '../user.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeatureActions.getUsers),
      switchMap(() =>
        this.userService.getUsersRequest().pipe(
          map((data: User[]) => {
            return FeatureActions.loadUsers({ users: data });
          }),
          catchError(error => of(FeatureActions.onError({ error })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeatureActions.addUserRequest),
      switchMap(action =>
        this.userService.createUserRequest(action.user).pipe(
          map((data: User) => {
            return FeatureActions.addUser({ user: data });
          }),
          catchError(error => of(FeatureActions.onError({ error })))
        )
      )
    )
  );

  removeUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeatureActions.deleteUserRequest),
      switchMap(action =>
        this.userService.deleteUserRequest(action.id).pipe(
          map(() => {
            return FeatureActions.deleteUser({ id: action.id });
          }),
          catchError(error => of(FeatureActions.onError({ error })))
        )
      )
    )
  );
}
