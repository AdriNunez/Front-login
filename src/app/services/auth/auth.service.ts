import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/userLogin/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn:boolean = false;

  constructor(private http:HttpClient) { }

  login(email:string, password:string): Observable<any> {
    let body = {
      email: email,
     password: password
    }

    return this.http.post('https://backexperttag.herokuapp.com/API/login', body)
  }

  get loggedIn() {

    return this.isLoggedIn

  }

   setLoggedIn(value: boolean) {

     this.isLoggedIn = value
  }

  register(userName:string, email:string,password:string): Observable<any>{
    let body = {
      username: userName,
      email: email,
     password: password
    }

    return this.http.post('https://backexperttag.herokuapp.com/API/signup', body)
  }
}
