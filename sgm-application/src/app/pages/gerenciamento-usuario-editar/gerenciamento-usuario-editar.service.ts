import { ParentService } from '../../util/parent.service';
import { Injectable } from '@angular/core';
import { Usuario } from 'app/models/usuario.model';


@Injectable({
    providedIn: 'root'
})
export class GerenciamentoUsuarioEditarEventoService {
    private _Url = 'sgm-auth-api/Auth/add-roles';
    constructor(private service: ParentService) {
    }
  
    alterarRoles(parametros: any): any {
      return this.service.post(this._Url, parametros)
        .then(
          retorno => { // Success
            return (retorno);
          },
          retornoErro => { // Error
            return (retornoErro);
          }
        );
    }
  }