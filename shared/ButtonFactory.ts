import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../interfaces/ButtonConfig';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Button-Factory',
  imports:[CommonModule],
  standalone:true ,
  template: `
    <button
      [type]="config.type || 'button'"
      [ngClass]="btnClasses()"
      (click)="config.action?.()"
    >
      <i *ngIf="config.icon" [class]="config.icon"></i>
      {{ config.label }}
    </button>
  `
})
export class ButtonComponent {
  @Input() config: ButtonConfig = {} as ButtonConfig;

  mainClasses:string[]= ["rounded-3xl", "px-4", "py-2", "text-white"]

  btnClasses():string{
    const type :Record<string,string>= {
      red: `bg-red-800 ${this.mainClasses.join(" ")}`,
      green: `bg-green-800 ${this.mainClasses.join(" ")}`,
      custom:`${this.config.class}`
    };
    return type[this.config.type]
  }



}
