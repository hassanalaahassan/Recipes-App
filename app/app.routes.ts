import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../Layouts/main-layout/main-layout.component';
import { NotFoundComponent } from '../shared/shared-components/not-found/not-found.component';
import { RecipesComponent } from '../Components/main-components/recipes/recipes.component';
import { CreateRecipeComponent } from '../Components/main-components/create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from '../Components/main-components/update-recipe/update-recipe.component';
import { FavRecipesComponent } from '../Components/main-components/fav-recipes/fav-recipes.component';
import { AuthLayoutComponent } from '../Layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../Components/auth-components/login/login.component';
import { RegisterComponent } from '../Components/auth-components/register/register.component';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';


export const routes: Routes =[
  {
    path:'auth',
    component:AuthLayoutComponent,
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"",
        redirectTo:"/auth/register",
        pathMatch:"full"
      }

    ]
  },
  {
    path:'',
    component:MainLayoutComponent,
    canActivateChild: [AuthGuardGuard],
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
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];
