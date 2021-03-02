import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'app/models/usuario.model';
import { RelacionarPermissoesBuscarService } from './relacionar-permissoes-buscar.service';
import { MessageComponent } from 'app/components/message/message.component';
import { Roteador } from 'app/core/data/roteador-provider';
import { MatSort, Sort } from '@angular/material';

@Component({
  selector: 'app-relacionar-permissoes-buscar',
  templateUrl: './relacionar-permissoes-buscar.component.html',
  styleUrls: ['./relacionar-permissoes-buscar.component.scss']
})
export class RelacionarPermissoesBuscarComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent
  @ViewChild(MatSort) sort: MatSort;
  
  public parametroBusca : string;
  public listaUsuarios : Array<Usuario>;
  constructor(private buscaService : RelacionarPermissoesBuscarService,
              private roteador : Roteador
    ) { 
        this.listaUsuarios = new Array<Usuario>();
      }

  ngOnInit() {
    this.buscar();
  }

  buscar(){
    this.buscaService.buscarUsuarios(this.parametroBusca)
    .then((response: any) => {
      if (response.codigoRetorno == 'SUCESSO') {
          this.listaUsuarios = response.listObjeto;     
      } else {
        this.mensagem.erro(response.mensagem ,0);
      }
    })
    .catch((erro) => {
      this.mensagem.erro("Falha ao realizar cadastro" + erro ? erro : "",0);
    })
  }

  editarPermissoes(usuario : Usuario){
    this.roteador.gotoParam('relacionar-permissoes-ativar',{usuario:usuario})
  }

  sortData(sort: Sort) {
    const data = this.listaUsuarios.slice();
    if (!sort.active || sort.direction === '') {
      this.listaUsuarios = data;
      return;

    }
    this.listaUsuarios = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nome': return this.compare(a.firstName, b.firstName, isAsc);
        case 'cpf': return this.compare(a.cpf, b.cpf, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
