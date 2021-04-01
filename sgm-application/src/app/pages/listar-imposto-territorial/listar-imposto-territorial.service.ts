import { Injectable } from '@angular/core';
import { ParentService } from 'app/util/parent.service';

@Injectable({
  providedIn: 'root'
})
export class ListarImpostoTerritorialService {

  private _Url = 'sgm-sac-api/CitizenService/getPropertyTax';

  constructor(private service: ParentService) {
  }

  listarImpostoTerritorial(parametros:any): any {
    let impostoRural=true;
    if(parametros.tipoImposto == "iptu"){
      impostoRural = false;
    }
    return this.service.post(this._Url,{"propertyRegistration":parametros.inscricaoImobiliaria,"isRuralTax":impostoRural})
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
