import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { RetornoServiceModel } from '../../models/retornoService.model';
import { ParentService } from 'app/util/parent.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private retorno: RetornoServiceModel;
  private _Url = 'sgm-auth-api/Auth/sign-in';
  private _UrlRoles = 'sgm-services/rest/roles';
  private _UrlLoginComRole = 'sgm-services/rest/loginRole';
  constructor(private service: ParentService) {
   }
  
  logar(cpf: string, password: string) : any{
      return this.service.postNA(this._Url,{'Cpf':cpf,'Password':password})
      .then(
        retorno => { // Success
          return(retorno);
        },
        retornoErro => { // Error
          return(retornoErro);
        }
      );
  }

  logarComRole(cpf: string, password: string, role:number) : any{
    return this.service.postNA(this._UrlLoginComRole,{'Cpf':cpf,'Password':password,'role':role})
    .then(
      retorno => { // Success
        return(retorno);
      },
      retornoErro => { // Error
        return(retornoErro);
      }
    );
  }

  recuperarRoles(cpf: string, password: string) : any{
    return this.service.postNA(this._UrlRoles,{'Cpf':cpf,'Password':password})
    .then(
      retorno => { // Success
        return(retorno);
      },
      retornoErro => { // Error
        return(retornoErro);
      }
    );
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
}
