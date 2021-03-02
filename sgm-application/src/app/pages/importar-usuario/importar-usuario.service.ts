import { Injectable } from '@angular/core';
import { ParentService } from 'app/util/parent.service';

@Injectable({
  providedIn: 'root'
})
export class ImportarUsuarioService {
  private _Url = 'sgm-services/rest/importarUsuario';
  constructor(private service: ParentService) {
  }

  enviarArquivo(file: FormData): any {
    return this.service.postMP(this._Url, file)
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
