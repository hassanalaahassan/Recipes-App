import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../../../interfaces/recipe.int';
import { RecipesService } from '../../../../services/Recipes.service';
import { AuthService } from '../../../../services/auth.service';
import { ScrollAnimationDirective } from '../../../../shared/dirctives/scroll-animation.directive';



@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,ScrollAnimationDirective],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe:Recipe = {} as Recipe
  @Output() showedRecipe = new EventEmitter<number>()
  @Output() recallData = new EventEmitter<boolean>()
  recipeIsFavorite:boolean = false
  user:any

  constructor(
    private recipeService:RecipesService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.checkFavorite(this.recipe.id)
    this.user = this.auth.getCurrentUser()
  }

  sendRecipe():void{
    this.showedRecipe.emit(this.recipe.id)
  }
  recallRecipes():void{
    this.recallData.emit(true)
  }
  addRecipeToFavorites(id:number):void{
    this.recipeService.addRecipeToFavorites(id)
    this.checkFavorite(id)
    // this.recallRecipes()
  }
  checkFavorite(id:number):void{
    this.recipeIsFavorite = this.recipeService.isFavorite(id)
  }

  removeRecipeFromFavorites(id:number):void{
    this.recipeService.removeRecipeFromFavorites(id)
    this.checkFavorite(id)
    this.recallRecipes()
  }
}
