import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RecipesComponent } from '../Components/recipes/recipes.component';
import { CreateRecipeComponent } from '../Components/create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from '../Components/update-recipe/update-recipe.component';
import { FavRecipesComponent } from '../Components/fav-recipes/fav-recipes.component';


export const routes: Routes =[
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        redirectTo:"All-Recipes",
        pathMatch:"full"
      },
      {
        path:"All-Recipes",
        component:RecipesComponent
      },
      {
        path:"Create-Recipe",
        component:CreateRecipeComponent
      },
      {
        path:"edit-recipe/:id",
        component:UpdateRecipeComponent
      },
      {
        path:"Fav-Recipe",
        component:FavRecipesComponent
      },

    ]
  }
];
