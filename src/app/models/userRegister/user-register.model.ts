import { IuserRegister } from "./iuser-register.interface";

export class UserRegister implements IuserRegister {
  userName: string;
  email: string;
  password: string;

  constructor(userName: string, email: string, password: string) {
    this.userName= userName;
    this.email = email
    this.password = password
  }
}
