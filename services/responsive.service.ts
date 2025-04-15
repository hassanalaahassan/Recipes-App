import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {


  isSideBarShowed:BehaviorSubject<boolean> = new BehaviorSubject(true)

  constructor() { }

  closeSideBar():void{
    this.isSideBarShowed.next(false)
  }

  openSideBar():void{
    this.isSideBarShowed.next(true)
  }



}
