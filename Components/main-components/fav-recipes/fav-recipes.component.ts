import { Component } from '@angular/core';
import { HomeHeaderComponent } from "../recipes/home-header/home-header.component";
import { Recipe } from '../../../interfaces/recipe.int';
import { RecipesService } from '../../../services/Recipes.service';
import { SearchTypesService } from '../../../services/search-types.service';
import { RecipeCardComponent } from '../recipes/recipe-card/recipe-card.component'
import { RecipeDetailesComponent } from '../recipe-detailes/recipe-detailes.component';


@Component({
  selector: 'app-fav-recipes',
  standalone: true,
  imports: [HomeHeaderComponent, RecipeCardComponent , RecipeDetailesComponent],
  templateUrl: './fav-recipes.component.html',
  styleUrl: './fav-recipes.component.scss'
})
export class FavRecipesComponent {
  recipes: Recipe[] = [];
  recipeDetailes: Recipe = {} as Recipe;
  showModel: boolean = false;


  constructor(private recipesService: RecipesService , private SearchService:SearchTypesService) {}

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(recall?:boolean): void {
    this.recipes = this.recipesService.getFavRecipes();
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
