
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
    if(userRole === undefined){
      this._router.navigate(['/login']);
      return false;  
    }
    for (let index = 0; index < userRole.length; index++) {
      const element = userRole[index];
      if (next.data.role.indexOf(element) > -1) {
        return true;
      }
    }
    

    // navigate to not found page
    this._router.navigate(['/forbidden']);
    return false;
  }

}