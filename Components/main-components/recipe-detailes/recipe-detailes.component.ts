import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { ToastComponent } from '../../../shared/shared-components/toast/toast.component';
import { Recipe } from '../../../interfaces/recipe.int';
import { RecipesService } from '../../../services/Recipes.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-recipe-detailes',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './recipe-detailes.component.html',
  styleUrl: './recipe-detailes.component.scss'
})
export class RecipeDetailesComponent implements OnInit {

  @Input() recipe:Recipe = {} as Recipe
  @Input() isShowed:boolean =true
  showToast:boolean =false
  user:any
  @Output() closeModel = new EventEmitter<Boolean>()
  @Output() recallData = new EventEmitter<Boolean>()



  constructor(
    private recipeService:RecipesService,
    private router:Router,
    private auth:AuthService) {
   }
   ngOnInit(): void {
       this.user = this.auth.getCurrentUser()
   }

  hideModel():void{
    this.isShowed = false
    this.closeModel.emit(false)
  }

  deleteRecipe():void{
    this.recipeService.removeRecipe(this.recipe.id)
    this.hideModel()
    this.toggleToast()
    this.recallData.emit(true)
    setTimeout(() => {
      this.toggleToast()
    }
    , 3000)
  }
  toggleToast():void{
    this.showToast = !this.showToast
  }
  editRecipe(id:number):void{
    this.router.navigate(['edit-recipe', id])
    this.hideModel()
  }

}
