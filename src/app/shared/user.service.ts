import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("assets/json/users.json");
  }
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`assets/json/users.json/${userId}`);
  }
}
