import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, GuardResult, MaybeAsync } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivateChild {
  constructor(private router: Router) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
// Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("currentUser"); // Replace with your authentication logic
    if (isAuthenticated) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['auth/login']);
      return false;
    }
   }


}
