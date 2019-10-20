import { Injectable } from '@angular/core';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /*constructor(private http: HttpClientModule) { }
    getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((response: HttpResponse) => response.json());
    }*/
}
