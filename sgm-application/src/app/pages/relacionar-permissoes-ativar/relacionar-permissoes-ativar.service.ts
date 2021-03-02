import { Injectable } from '@angular/core';
import { ParentService } from 'app/util/parent.service';
import { Usuario } from 'app/models/usuario.model';
import { RoleModel } from 'app/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RelacionarPermissoesAtivarService {
  private _Url = 'sgm-services/rest/permissoes/ativar';
  constructor(private service: ParentService) {
  }

  salvarPermissoes(usuario: Usuario): any {
    return this.service.put(this._Url, usuario)
      .then(
        retorno => { // Success
          return (retorno);
        },
        retornoErro => { // Error
          return (retornoErro);
        }
      );
  }

  removerPermissaoUsuario(usuario: Usuario,role : RoleModel): any {
    let params = {usuario:usuario,role:role};
    return this.service.put(this._Url, params)
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
