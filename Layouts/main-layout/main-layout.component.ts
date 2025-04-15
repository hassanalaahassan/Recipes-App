import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../shared/shared-components/side-bar/side-bar.component';
import { ResponsiveService } from '../../services/responsive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  // showSideBar:boolean = true

  // constructor(private responsive:ResponsiveService){}

  // toggleSideBar():void{
  //   this.watchResponsive()
  //   if (this.showSideBar) {
  //     this.responsive.closeSideBar()
  //   }
  //   else{
  //     this.responsive.openSideBar()
  //   }
  //   this.watchResponsive()
  //   console.log(this.showSideBar);

  // }

  // watchResponsive():void{
  //   this.responsive.isSideBarShowed.subscribe({
  //     next:(value)=>{
  //       this.showSideBar = value
  //     }
  //   })
  // }
}
