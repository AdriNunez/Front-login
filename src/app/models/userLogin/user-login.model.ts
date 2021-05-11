import { IuserLogin } from "./iuser-login.interface";


export class UserLogin implements IuserLogin {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
}
