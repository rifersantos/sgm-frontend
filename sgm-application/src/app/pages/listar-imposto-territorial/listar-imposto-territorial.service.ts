import { Injectable } from '@angular/core';
import { ParentService } from 'app/util/parent.service';

@Injectable({
  providedIn: 'root'
})
export class ListarImpostoTerritorialService {

  private _Url = 'sgm-services/rest/listarImpostoTerritorial';
  constructor(private service: ParentService) {
  }

  listarImpostoTerritorial(): any {
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
