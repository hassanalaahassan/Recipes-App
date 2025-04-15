import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { TransformUpDirective } from '../../dirctives/transform-up.directive';
import { LinkComponent } from "./link/link.component";
import { AuthService } from '../../../services/auth.service';
import { ResponsiveService } from '../../../services/responsive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TransformUpDirective, LinkComponent,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit  {

  @ViewChild("sidebar") sideBar!:ElementRef

  linksData:{title:string,icon:string,route?:string,linkFor?:string}[] = [
    {
      title:"All Recipes",
      icon:"sidebar/Links-icons/chef-hat.png",
      route:"/All-Recipes",
      linkFor:"all"
    },
    {
      title:"Create Recipe",
      icon:"sidebar/Links-icons/badge-plus.png",
      route:"/Create-Recipe",
      linkFor:"admin"
    },
    {
      title:"Favorite Recipes",
      icon:"sidebar/Links-icons/white-heart.png",
      route:"/Fav-Recipe",
      linkFor:"user"
    },
    {
      title:"Analytics",
      icon:"sidebar/Links-icons/Pie_Chart.png",
      linkFor:"all"
    },
    {
      title:"Marketing",
      icon:"sidebar/Links-icons/Verified_Check.png"
    },
    {
      title:"Settings",
      icon:"sidebar/Links-icons/Settings.png",
      linkFor:"admin"
    },
    {
      title:"Help",
      icon:"sidebar/Links-icons/User_Help.png",
      linkFor:"user"
    },
    {
      title:"Log out",
      icon:"sidebar/log-out.png",
      linkFor:"all"
    }
  ]
  activeLink:{title:string,icon:string}  = this.linksData[0]

  user:any

  isSideBarShowed:boolean = true
  flagClass:boolean = true

  constructor(
    private auth:AuthService,
    private responsive:ResponsiveService
  )
  {}

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser()
  }
  setActive(link:{title:string,icon:string}):void{
    this.activeLink = link
    if (link.title === "Log out") {
      this.signOut()
    }
  }
  toggleSideBar():void{
    this.flagClass = !this.flagClass
    
    const timiId = setTimeout(()=>{
      this.isSideBarShowed = !this.isSideBarShowed
      console.log(this.isSideBarShowed);

    },400)

    // clearTimeout(timiId)
  }
  signOut():void{
    this.auth.logOut()
  }

}
