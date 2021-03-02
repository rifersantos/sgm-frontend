import { ParentService } from '../../util/parent.service';
import { Injectable } from '@angular/core';
import { Usuario } from 'app/models/usuario.model';


@Injectable({
    providedIn: 'root'
})
export class GerenciamentoUsuarioListarService {
    private _Url = 'sgm-services/rest/gerenciamento/usuario/listar';
    constructor(private service: ParentService) {
    }
  
    listarUsuariosByUsuarioLogado(): any {
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

    
  }