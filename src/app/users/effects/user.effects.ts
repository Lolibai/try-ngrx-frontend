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
            console.log('data: ', data);
            return FeatureActions.loadUsers({ users: data });
          }),
          catchError(error => of(FeatureActions.onError({ error })))
        )
      )
    )
  );
}
