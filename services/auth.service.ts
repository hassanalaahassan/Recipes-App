import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  allUsers: any[] = [];
  allAdmin: any[] = [];
  currentUser: any = null;

  constructor(private localStorage:LocalStorageService,private router:Router){
    this.allUsers = this.getAllUsers()
    this.allAdmin = this.getAllAdmins()
    this.currentUser = this.getCurrentUser()
  }
  register(user: any): void {
    const alreadyExist = this.findUser(user)
    const cheackAdmin =  this.isAdmin(user.email)
    if(!alreadyExist && !cheackAdmin){
      this.addUser(user);
    }
    if(cheackAdmin){
      this.addAdmin(user);
    }
  }
  getAllUsers(): any[] {
    return this.localStorage.getItem("users") || [];
  }
  addUser(user: any): void {
    this.allUsers = this.getAllUsers();
    this.allUsers.push(user);
    this.localStorage.setItem("users", this.allUsers);
  }
  getAllAdmins(): any[] {
    return this.localStorage.getItem("admins") || [];
  }
  addAdmin(admin: any): void {
    this.allAdmin = this.getAllAdmins();
    this.allAdmin.push(admin);
    this.localStorage.setItem("admins", this.allAdmin);
  }
  isAdmin(userEmail: string): boolean {
    return userEmail.toLowerCase().includes("admin")
  }
  login(checkUser: any): boolean {
    const cheackAdmin =  this.isAdmin(checkUser.email)
    if(cheackAdmin){
      this.currentUser = this.searchOnUser(checkUser.email,this.allAdmin)
      return this.setCurrentAdmin(this.currentUser);
    }
    else{
      this.currentUser = this.searchOnUser(checkUser.email,this.allUsers)
      return this.setCurrentUser(this.currentUser);
    }
  }
  searchOnUser(email: string,arrForSearch:any[]): any {
    return arrForSearch.find((user)=> user.email === email)
  }
  setCurrentUser(user: any): boolean {
    this.allUsers = this.getAllUsers()
      const myUser = this.findUser(user)
      if(myUser){
        this.localStorage.setItem("currentUser", user);
        return true;
      }
      else{
        return false;
      }
  }
  setCurrentAdmin(admin: any): boolean {
    this.allAdmin = this.getAllAdmins()
      const myAdmin = this.findAdmin(admin)
      if(myAdmin){
        console.log(admin);

        this.localStorage.setItem("currentUser", admin);
        return true;
      }
      else{
        return false;
      }
  }
  findUser(checkUser:any): boolean {
    const myUser = this.allUsers.find((user)=> user.email === checkUser.email && user.password === checkUser.password);
    if(myUser)
    return true
    else
    return false
  }
  findAdmin(checkAdmin:any): boolean {
    const myUser = this.allAdmin.find((user)=> user.email === checkAdmin.email && user.password === checkAdmin.password);
    if(myUser)
    return true
    else
    return false
  }
  logOut(): void {
    localStorage.removeItem("currentUser");
    this.currentUser=null
    this.router.navigate(['auth/login']);
  }
  getCurrentUser(): any {
    return this.localStorage.getItem("currentUser") || null;
  }
}
