import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private router : Router) {}
  canActivate(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log(this.authService.isAuthenticated())
    if (this.authService.isAuthenticated()) return true;
    this.router.navigate(['sign-up'])
  }
}
