import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../../../shared/shared-components/toast/toast.component';
import { RecipesService } from '../../../services/Recipes.service';
import { Recipe } from '../../../interfaces/recipe.int';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [ReactiveFormsModule, ToastComponent , CommonModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.scss'
})
export class CreateRecipeComponent {

  imagePreview: string | null = null;
  @ViewChild('ImageInput') fileInput: any;
  showToast: boolean = false;

  recipeForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl('' , Validators.required),
    country: new FormControl('' , Validators.required),
    image: new FormControl('' , Validators.required),
    description: new FormControl('' , Validators.required),
    ingredients: new FormArray<FormControl<string|null>>([new FormControl('' , Validators.required)])
  })
  constructor(private recipes:RecipesService) { }



  addIngredient():void {
    const ingredient = new FormControl('', Validators.required);
    this.recipeForm.controls.ingredients.push(ingredient)
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagePreview = URL.createObjectURL(file);
      this.recipeForm.controls.image.setValue(this.imagePreview);
    }
  }

  getLastId(): number {
    const recipes = this.recipes.getRecipes();
    if (recipes.length === 0) {
      return 1;
    } else {
      return recipes[recipes.length - 1].id + 1;
    }
  }


  onSubmit(): void {
    this.recipeForm.controls.id.setValue(this.getLastId())
  this.recipes.addRecipe(this.recipeForm.value as Recipe);
  this.showToast = true;
  setTimeout(() => {
    this.showToast = false;
  }, 3000);
  this.recipeForm.reset();
  this.recipeForm.setControl('ingredients', new FormArray([new FormControl('', Validators.required)]));
  this.fileInput.nativeElement.value = "";
  this.imagePreview = null;
}


}
