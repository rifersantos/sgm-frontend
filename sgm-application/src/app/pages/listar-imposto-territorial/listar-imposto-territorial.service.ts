import { Injectable } from '@angular/core';
import { ParentService } from 'app/util/parent.service';

@Injectable({
  providedIn: 'root'
})
export class ListarImpostoTerritorialService {

  private _UrlIptu = 'iptu/';
  private _UrlItr = 'itr/';

  constructor(private service: ParentService) {
  }

  listarImpostoTerritorial(parametros:any): any {
    let url;
    if(parametros.tipoImposto == "iptu"){
      url = this._UrlIptu;
    }else{
      url = this._UrlItr;
    }
    return this.service.get(url+parametros.inscricaoImobiliaria)
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
