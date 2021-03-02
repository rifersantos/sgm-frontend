
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {


  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userRole = this._authService.getUserRole();
    if (next.data.role.indexOf(userRole) > -1) {
      return true;
    }else if(userRole === undefined){
      this._router.navigate(['/login']);
      return false;  
    }

    // navigate to not found page
    this._router.navigate(['/forbidden']);
    return false;
  }

}