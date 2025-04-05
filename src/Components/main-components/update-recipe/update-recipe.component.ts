import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ToastComponent } from '../../../shared/shared-components/toast/toast.component';
import { Recipe } from '../../../interfaces/recipe.int';
import { SearchTypesService } from '../../../services/search-types.service';
import { RecipesService } from '../../../services/Recipes.service';


@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [ToastComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.scss'
})
export class UpdateRecipeComponent implements OnInit {

  recipeId:number = 0;
  recipe:Recipe = {} as Recipe;
  showToast: boolean = false;
  recipeForm = new FormGroup({
      id: new FormControl<number>(0),
      title: new FormControl('' , Validators.required),
      country: new FormControl('' , Validators.required),
      image: new FormControl('' , Validators.required),
      description: new FormControl('' , Validators.required),
      ingredients: new FormArray<FormControl<string|null>>([])
    })
  constructor(
     private activeRoute: ActivatedRoute ,
     private searchService:SearchTypesService ,
     private recipesService:RecipesService
    ) { }

  ngOnInit() {
    this.getRecipeId()
  }
  getRecipeId() {
    this.activeRoute.params.subscribe(params => {
      this.recipeId = +params['id'];
    });
    this.recipe=this.getRecipe(this.recipeId)
    this.setForm()

  }
  getRecipe(id:number) {
    return this.searchService.searchById(id)
  }
  setForm() {
    this.recipeForm.controls.id.setValue(this.recipe.id)
    this.recipeForm.controls.title.setValue(this.recipe.title)
    this.recipeForm.controls.country.setValue(this.recipe.country)
    this.recipeForm.controls.image.setValue(this.recipe.image)
    this.recipeForm.controls.description.setValue(this.recipe.description)
    this.recipe.ingredients.forEach((ingredient) => {
      const ingredientControl = new FormControl(ingredient, Validators.required);
      (this.recipeForm.get('ingredients') as FormArray).push(ingredientControl);
    });
  }
  addIngredient():void {
    const ingredient = new FormControl('', Validators.required);
    this.recipeForm.controls.ingredients.push(ingredient)
  }
  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }
    this.recipesService.updateRecipe(this.recipeForm.value as Recipe)
    this.showToast = true;

  }
}
