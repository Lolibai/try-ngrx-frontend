import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const getUsers = createAction('[User/API] Get Users');

export const loadUsers = createAction(
  '[User/API] Load Users',
  props<{ users: User[] }>()
);

export const addUserRequest = createAction(
  '[User/API] Add User Request',
  props<{ user: User }>()
);

export const addUser = createAction(
  '[User/API] Add User',
  props<{ user: User }>()
);

export const upsertUser = createAction(
  '[User/API] Upsert User',
  props<{ user: User }>()
);

export const addUsers = createAction(
  '[User/API] Add Users',
  props<{ users: User[] }>()
);

export const upsertUsers = createAction(
  '[User/API] Upsert Users',
  props<{ users: User[] }>()
);

export const updateUser = createAction(
  '[User/API] Update User',
  props<{ user: Update<User> }>()
);

export const updateUsers = createAction(
  '[User/API] Update Users',
  props<{ users: Update<User>[] }>()
);

export const deleteUserRequest = createAction(
  '[User/API] Delete User Request',
  props<{ id: string }>()
);

export const deleteUser = createAction(
  '[User/API] Delete User',
  props<{ id: string }>()
);

export const deleteUsers = createAction(
  '[User/API] Delete Users',
  props<{ ids: string[] }>()
);

export const onError = createAction(
  '[User/API] Error Users',
  props<{ error: any }>()
);

export const clearUsers = createAction('[User/API] Clear Users');
