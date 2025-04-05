import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  allUsers: any[] = [];

  constructor(private localStorage:LocalStorageService,private router:Router) {
    this.allUsers = this.getAllUsers()
   }

  // Function to register a new user
  register(user: any): void {
    const alreadyExist = this.findUser(user)
    if(!alreadyExist){
      this.allUsers = this.getAllUsers();
      this.allUsers.push(user);
      this.localStorage.setItem("users", this.allUsers);
    }
  }
  getAllUsers(): any[] {
    return this.localStorage.getItem("users") || [];
  }
  login(checkUser: any): boolean {
    this.allUsers = this.getAllUsers();
    const myUser = this.findUser(checkUser)
    if(myUser){
      this.localStorage.setItem("currentUser", checkUser);
      return true;
    }else{
      return false;
    }
  }
  findUser(checkUser:any): any {
    const myUser = this.allUsers.find((user)=> user.email === checkUser.email && user.password === checkUser.password);
    if(myUser)
    return true
    else
    return false
  }
  logOut(): void {
    localStorage.removeItem("currentUser");
    this.router.navigate(['auth/login']);
  }
}
