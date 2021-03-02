import { Injectable } from '@angular/core';
import { ParentService } from 'app/util/parent.service';
import { Usuario } from 'app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RelacionarPermissoesBuscarService {
  private _Url = 'sgm-services/rest/teste';
  private _UrlPermissoesRoles = 'sgm-services/rest/permissoes/roles';
  private _UrlPermissoesAllRoles = 'sgm-services/rest/permissoes/allRoles';
  
  constructor(private service: ParentService) {
  }

  buscarUsuarios(parametro: string):any {
    //let params = {parametroBusca:parametro}
    return this.service.get(this._Url)
      .then(
        retorno => { // Success
          return (retorno);
        },
        retornoErro => { // Error
          return (retornoErro);
        }
      );
  }

  BuscarRolesPorUsuario(usuario: Usuario):any {
    let params = {usuarioId:usuario.id}
    return this.service.get(this._UrlPermissoesRoles, params)
      .then(
        retorno => { // Success
          return (retorno);
        },
        retornoErro => { // Error
          return (retornoErro);
        }
      );
  }

  BuscarRoles():any {
    return this.service.get(this._UrlPermissoesAllRoles)
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
