import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from 'app/components/message/message.component';
import { MatSort, Sort } from '@angular/material';
import { Usuario } from 'app/models/usuario.model';
import { RoleModel } from 'app/models/role.model';
import { RelacionarPermissoesBuscarService } from '../relacionar-permissoes-buscar/relacionar-permissoes-buscar.service';
import { Roteador } from 'app/core/data/roteador-provider';
import { RelacionarPermissoesAtivarService } from './relacionar-permissoes-ativar.service';
import { PermissaoModel } from 'app/models/permissao.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-relacionar-permissoes-ativar',
  templateUrl: './relacionar-permissoes-ativar.component.html',
  styleUrls: ['./relacionar-permissoes-ativar.component.scss']
})
export class RelacionarPermissoesAtivarComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent
  @ViewChild(MatSort) sort: MatSort;

  public usuarioEscolhido: Usuario;
  private roles: Array<RoleModel>;
  private rolesUsuario: Array<RoleModel>;
  public permissoes: Array<PermissaoModel>;
  constructor(private buscaService: RelacionarPermissoesBuscarService,
    private ativarService: RelacionarPermissoesAtivarService,
    private roteador: Roteador
  ) {
    this.permissoes = new Array<PermissaoModel>();
  }

  ngOnInit() {
    let params = this.roteador.getParam();
    if (params['usuario']) {
      this.usuarioEscolhido = params['usuario'];
      this.buscarRolesUsuario();
    } else {
      this.roteador.goto('relacionar-permissoes-buscar');
    }
  }

 
  buscarRolesUsuario() {
    this.buscaService.BuscarRolesPorUsuario(this.usuarioEscolhido)
      .then((response: any) => {
        if (response.codigoRetorno == 'SUCESSO') {
          this.rolesUsuario = response.listObjeto;
          this.buscarRoles();
        } else {
          this.mensagem.erro(response.mensagem ? response.mensagem : "", 0);
        }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao buscar roles do usuário" + erro ? erro : "", 0);
      })
  }

  buscarRoles() {
    this.buscaService.BuscarRoles()
      .then((response: any) => {
        if (response.codigoRetorno == 'SUCESSO') {
          this.roles = response.listObjeto;
          this.montarQuadroPermissoes();
        } else {
          this.mensagem.erro(response.mensagem ? response.mensagem : "", 0);
        }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao buscar roles do usuário" + erro ? erro : "", 0);
      })
  }

  montarQuadroPermissoes() {
    
    this.permissoes = new Array<PermissaoModel>();
    let permissao: PermissaoModel;
    this.roles.forEach(r => {
      permissao = new PermissaoModel();
      permissao.apresentacao = r.apresentacao;
      permissao.nome = r.nome;
      this.rolesUsuario.forEach(ru => {
        if (ru.id == r.id) {
          permissao.status = true;
        }
      });
      this.permissoes.push(permissao);
    });
  }

  changeCheckbox(permissao: PermissaoModel,e) {
    
    let role: RoleModel = new RoleModel();
    if (e.checked) {
      this.roles.forEach(r => {
        if (permissao.nome == r.nome) {
          this.usuarioEscolhido.role.push(r);
        }
      });
    } else {
      this.usuarioEscolhido.role.forEach(r => {
        if (permissao.nome == r.nome) {
          let index = this.usuarioEscolhido.role.indexOf(r, 1);
          if (index > -1) {
            this.usuarioEscolhido.role.splice(index, 1);
          }
        }
      });
    }
  }

  salvar(form: NgForm) {
    this.ativarService.salvarPermissoes(this.usuarioEscolhido)
    .then((response: any) => {
      if (response.codigoRetorno == 'SUCESSO') {
        this.mensagem.sucesso("Permissões salvas.", 0);
      } else {
        this.mensagem.erro(response.mensagem ? response.mensagem : "", 0);
      }
    })
    .catch((erro) => {
      this.mensagem.erro("Não foi possivel salvar permissões.", 0);
    })
  }

  goBack() {
    this.roteador.goto('relacionar-permissoes-buscar');
  }

  sortData(sort: Sort) {
    const data = this.roles.slice();
    if (!sort.active || sort.direction === '') {
      this.roles = data;
      return;

    }
    this.roles = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nome': return this.compare(a.nome, b.nome, isAsc);
        case 'apresentacao': return this.compare(a.apresentacao, b.apresentacao, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}