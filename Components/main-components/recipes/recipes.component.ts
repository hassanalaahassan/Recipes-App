import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from "./recipe-card/recipe-card.component";

import { RecipeDetailesComponent } from "../recipe-detailes/recipe-detailes.component";

import { HomeHeaderComponent } from "./home-header/home-header.component";
import { log } from 'console';
import { Recipe } from '../../../interfaces/recipe.int';
import { RecipesService } from '../../../services/Recipes.service';
import { SearchTypesService } from '../../../services/search-types.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, RecipeDetailesComponent, FormsModule, HomeHeaderComponent],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  recipeDetailes: Recipe = {} as Recipe;
  showModel: boolean = false;


  constructor(private recipesService: RecipesService , private SearchService:SearchTypesService) {}

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(recall?:boolean): void {
    this.recipes = this.recipesService.getRecipes();
  }


  filterRecipes(letterSearch:string):void{
    this.recipes = this.SearchService.searchByTitle(letterSearch)
  }

  receiveRecipeFromChild(recipeId: number): void {
    this.recipeDetailes = this.showedRecipeById(recipeId);
    this.toggleModel();
  }

  showedRecipeById(recipeId: number): Recipe {
    return this.SearchService.searchById(recipeId);
  }

  toggleModel(): void {
    this.showModel = !this.showModel;
  }

}
