import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInForm } from '../models/signInForm.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url = "http://localhost:8080"

  constructor(public http: HttpClient) { }

  getUsers(): Observable<SignInForm[]> {
    return this.http.get<SignInForm[]>(`${this.url}/users`)
  }

  getUserById(): Observable<SignInForm> {
    return this.http.get<SignInForm>(`${this.url}/users/:id`)
  }

  postUser(user: SignInForm): Observable<SignInForm> {
  return this.http.post<SignInForm>(`${this.url}/users/add`, user)
}
}
