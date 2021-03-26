import { ParentService } from '../../util/parent.service';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class ConsultarProjetosListarService {
    private _UrlListar = 'listar/';
    private _UrlBuscar = 'detalhes/';
    constructor(private service: ParentService) {
    }
  
    listarProjetos(): any {
      return this.service.get(this._UrlListar)
        .then(
          retorno => { // Success
            return (retorno);
          },
          retornoErro => { // Error
            return (retornoErro);
          }
        );
    }

    buscarProjeto(id : String): any {
      return this.service.get(this._UrlBuscar+id)
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