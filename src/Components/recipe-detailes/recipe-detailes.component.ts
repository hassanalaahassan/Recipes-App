import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.int';
import { RecipesService } from '../../services/Recipes.service';
import { ToastComponent } from "../../shared/shared-components/toast/toast.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detailes',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './recipe-detailes.component.html',
  styleUrl: './recipe-detailes.component.scss'
})
export class RecipeDetailesComponent {

  @Input() recipe:Recipe = {} as Recipe
  @Input() isShowed:boolean =true
  showToast:boolean =false
  @Output() closeModel = new EventEmitter<Boolean>()
  @Output() recallData = new EventEmitter<Boolean>()


  constructor(private recipeService:RecipesService,private router:Router) {
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
