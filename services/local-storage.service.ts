import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem<T>(nameForAccess: string , item: T): void {
    localStorage.setItem(nameForAccess, JSON.stringify(item));
  }


  getItem<T>(nameForAccess: string): T | null {
    const item = localStorage.getItem(nameForAccess);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  }
}

