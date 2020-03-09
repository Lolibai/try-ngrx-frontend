import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsersRequest() {
    return this.httpClient.get('http://localhost:3000/users');
  }

  public createUserRequest(user) {
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  public deleteUserRequest(id) {
    return this.httpClient.delete(`http://localhost:3000/users/${id}`);
  }
}
