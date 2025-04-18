import { AfterViewInit, Component, QueryList, ViewChildren, viewChildren } from '@angular/core';
import { TransformUpDirective } from '../../dirctives/transform-up.directive';
import { LinkComponent } from "./link/link.component";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TransformUpDirective, LinkComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent  {


  linksData:{title:string,icon:string,route?:string}[] = [
    {
      title:"All Recipes",
      icon:"sidebar/Links-icons/chef-hat.png",
      route:"/All-Recipes"
    },
    {
      title:"Create Recipe",
      icon:"sidebar/Links-icons/badge-plus.png",
      route:"/Create-Recipe"
    },
    {
      title:"Favorite Recipes",
      icon:"sidebar/Links-icons/white-heart.png",
      route:"/Fav-Recipe"
    },
    {
      title:"Log out",
      icon:"sidebar/log-out.png",
    },
    {
      title:"Analytics",
      icon:"sidebar/Links-icons/Pie_Chart.png"
    },
    {
      title:"Marketing",
      icon:"sidebar/Links-icons/Verified_Check.png"
    },
    {
      title:"Settings",
      icon:"sidebar/Links-icons/Settings.png"
    },
    {
      title:"Help",
      icon:"sidebar/Links-icons/User_Help.png"
    },
  ]
  activeLink:{title:string,icon:string}  = this.linksData[0]

  constructor(private auth:AuthService) {
  }
  setActive(link:{title:string,icon:string}):void{
    this.activeLink = link
    if (link.title === "Log out") {
      this.signOut()
    }
  }

  signOut():void{
    this.auth.logOut()
  }

}
