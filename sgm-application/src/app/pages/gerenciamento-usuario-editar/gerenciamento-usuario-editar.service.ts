import { ParentService } from '../../util/parent.service';
import { Injectable } from '@angular/core';
import { Usuario } from 'app/models/usuario.model';


@Injectable({
    providedIn: 'root'
})
export class GerenciamentoUsuarioEditarEventoService {
    private _Url = 'sgm-services/rest/gerenciamento/usuario/editar';
    constructor(private service: ParentService) {
    }
  
    alterarUsuario(usuario: Usuario): any {
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
  }