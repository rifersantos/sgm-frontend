import { Component, OnInit, ViewChild } from '@angular/core';
import { GerenciamentoUsuarioListarService } from './gerenciamento-usuario-listar.service';
import { MessageComponent } from 'app/components/message/message.component';
import { Usuario } from 'app/models/usuario.model';
import { Sort } from '@angular/material';
import { Roteador } from 'app/core/data/roteador-provider';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-gerenciamento-usuario-listar',
  templateUrl: './gerenciamento-usuario-listar.component.html',
  styleUrls: ['./gerenciamento-usuario-listar.component.scss']
})
export class GerenciamentoUsuarioListarComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent
  public usuarios: Array<Usuario>;
  public isMaster: Boolean;

  constructor(private service: GerenciamentoUsuarioListarService,
    private roteador: Roteador,
    private authService: AuthService) {
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit() {
    let role = this.authService.getUserRole();
    if (role == "ROLE_MASTER" || role == "ROLE_MASTER_AUXILIAR") {
      this.isMaster = true;
    }
    let param = this.roteador.getParam();


    this.service.listarUsuariosByUsuarioLogado()
      .then((response: any) => {
        if (response.codigoRetorno == 'SUCESSO') {
          this.usuarios = response.listObjeto;
        } else {
          this.mensagem.erro("Falha ao recuperar usuários. " + response.mensagem ? response.mensagem : "", 0);
        }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao recuperar usuários. " + erro.mensagem ? erro.mensagem : "", 0);
      });
  }

  

  editarUsuario(usuario: Usuario) {
    this.roteador.gotoParam('gerenciamento-usuario-editar', { usuario: usuario })
  }


  sortData(sort: Sort) {
    const data = this.usuarios.slice();
    if (!sort.active || sort.direction === '') {
      this.usuarios = data;
      return;

    }
    this.usuarios = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'cpf': return this.compare(a.cpf, b.cpf, isAsc);
        case 'nome': return this.compare(a.firstName, b.firstName, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
