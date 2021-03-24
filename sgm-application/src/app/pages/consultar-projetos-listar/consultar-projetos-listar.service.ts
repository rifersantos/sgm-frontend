import { ParentService } from '../../util/parent.service';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class ConsultarProjetosListarService {
    private _Url = 'listar/';
    constructor(private service: ParentService) {
    }
  
    listarProjetos(): any {
      return this.service.get(this._Url)
        .then(
          retorno => { // Success
            debugger;
            return (retorno);
          },
          retornoErro => { // Error
            return (retornoErro);
          }
        );
    }

    
  }