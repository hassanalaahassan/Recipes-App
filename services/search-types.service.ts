import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.int';
import { RecipesService } from './Recipes.service';

@Injectable({
  providedIn: 'root'
})
export class SearchTypesService {

  globalRecipe:Recipe[]=[]

  constructor(private RecipeService:RecipesService) {
    this.saveData()
  }

  saveData(){
    this.globalRecipe=this.RecipeService.getRecipes()
  }

  searchById(recipeId: number): Recipe{
    this.saveData();
    return this.globalRecipe.filter((recipe) => recipe.id === recipeId)[0];
  }
  searchByTitle(searchTerm: string): Recipe[] {
    this.saveData();
    if(searchTerm)
      return this.globalRecipe.filter((recipe)=> recipe.title.toUpperCase().includes(searchTerm.toUpperCase()))

    return this.globalRecipe
  }
}
