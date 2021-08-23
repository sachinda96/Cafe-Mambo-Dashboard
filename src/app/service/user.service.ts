import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { MAIN } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  save(emp: User) {
    return this.http.post(MAIN + '/employee/save', emp);
  }

  update(emp: User) {
    return this.http.post(MAIN + '/employee/update', emp);
  }

  getAllUser(): Observable<Array<User>> {
    return this.http.get<Array<User>>(MAIN + '/employee/getAll');
  }

  getAllUserByRole(role: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(
      MAIN + '/employee/getAllEmployeeByRole/' + role
    );
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(MAIN + '/employee/getEmployee/' + id);
  }

  removeUser(id: string) {
    return this.http.get(MAIN + '/employee/removeEmployee/' + id);
  }
}
