import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['expectedRole'].split('|');
 
    if (!this.authService.hasAnyRole(expectedRoles)) {
      this.router.navigate(['/login']);
      return false;
    }
 
    return true;
  }
}