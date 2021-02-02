import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../create-user/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url)
  }

  getSingleUser(id):Observable<User>{
    return this.httpClient.get<User>(`${this.url}${id}`)
  }

  addNewUser(newUser: User): Observable<User>{
    return this.httpClient.post<User>(this.url, newUser)
  }

  editCurrentUser(id: string, editedUser: User): Observable<User>{
    return this.httpClient.put<User>(`${this.url}${id}`, editedUser)
  }

  deleteCurrentUser(id: string): Observable<{}>{
    return this.httpClient.delete(`${this.url}${id}`)
  }


}
