import { Injectable } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ParentService } from 'app/util/parent.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _Url = 'sgm-services/rest/home';

  constructor(private s : ParentService,private authService : AuthService) { }

  consultarUsuario():any{
   return this.authService.getUsuario();
  }

}
