import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'app/models/usuario.model';
import { GerenciamentoUsuarioEditarEventoService } from './gerenciamento-usuario-editar.service';
import { MessageComponent } from 'app/components/message/message.component';
import { Roteador } from 'app/core/data/roteador-provider';

@Component({
  selector: 'app-gerenciamento-usuario-editar',
  templateUrl: './gerenciamento-usuario-editar.component.html',
  styleUrls: ['./gerenciamento-usuario-editar.component.scss']
})
export class GerenciamentoUsuarioEditarComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent;

  public cpf: String;
  public role:String;

  constructor(private service: GerenciamentoUsuarioEditarEventoService,
    private roteador: Roteador) { 

    }

  ngOnInit() {
    
  }

  salvar() {
    let parametros = {"cpf":this.cpf,"roles":this.role.split(",")};
    this.service.alterarRoles(parametros)
      .then((response: any) => {
        if (response.succeeded) {
          this.mensagem.sucesso("Usuario alterado. ", 0);
        } else {
          this.mensagem.erro("Falha ao alterar usuário. " + response.message, 0);
        }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao alterar usuário. " + erro.message, 0);
      });
  }

}
