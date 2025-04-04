import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.int';
import { RECIPES } from '../server/Recipes.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes:Recipe[] = RECIPES
  favRecipes:Recipe[] = []

  constructor(private localStorage:LocalStorageService) { }

  getRecipes():Recipe[]{
    return this.localStorage.getItem<Recipe[]>("recipes") || this.recipes
  }
  getFavRecipes():Recipe[]{
    return this.localStorage.getItem<Recipe[]>("favRecipes") || []
  }
  addRecipe(recipe:Recipe):void{
    this.recipes = this.getRecipes()
    this.recipes.push(recipe)
    this.localStorage.setItem("recipes", this.recipes)
  }
  removeRecipe(id:number):void{
    this.recipes = this.getRecipes()
    this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    this.localStorage.setItem("recipes", this.recipes)
  }
  updateRecipe(recipe:Recipe):void{
    this.recipes = this.getRecipes()
    const updatedRecipeIndex = this.recipes.findIndex(r => r.id === recipe.id)
    this.recipes.splice(updatedRecipeIndex,1,recipe)
    this.localStorage.setItem("recipes", this.recipes)
  }
  addRecipeToFavorites(id:number):void{
    this.recipes = this.getRecipes()
    const favRecipe = this.recipes.filter(recipe => recipe.id === id)[0]
    this.favRecipes = this.getFavRecipes()
    this.favRecipes.push(favRecipe)
    this.localStorage.setItem("favRecipes", this.favRecipes)
  }
  removeRecipeFromFavorites(id:number):void{
    this.favRecipes = this.getFavRecipes()
    this.favRecipes = this.favRecipes.filter(recipe => recipe.id !== id)
    this.localStorage.setItem("favRecipes", this.favRecipes)
  }
  isFavorite(id:number):boolean{
    this.favRecipes = this.getFavRecipes()
    return this.favRecipes.some(recipe => recipe.id === id)
  }

}
