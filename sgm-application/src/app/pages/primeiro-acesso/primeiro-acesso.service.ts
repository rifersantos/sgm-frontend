import { Injectable } from '@angular/core';
import { ParentService } from 'app/util/parent.service';
import { PrimeiroAcesso } from 'app/models/primeiroAcesso.model';

@Injectable({
  providedIn: 'root'
})
export class PrimeiroAcessoService {
  private _Url = 'auth/sign-up';
  constructor(private service: ParentService) {
   }
  
  confirmarUsuario(primeiroAceso : PrimeiroAcesso) : any{
      return this.service.post(this._Url,
        { 
          cpf : primeiroAceso.Cpf,
          email: primeiroAceso.Email,
          FirstName:primeiroAceso.FirstName,
          LastName:primeiroAceso.LastName,
          Password:primeiroAceso.Password,
          ConfirmPassword:primeiroAceso.ConfirmPassword
        }
      ).then(
        retorno => { // Success
          return(retorno);
        },
        retornoErro => { // Error
          return(retornoErro);
        }
      );
  }
}
