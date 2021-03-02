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

  public usuario: Usuario;

  constructor(private service: GerenciamentoUsuarioEditarEventoService,
    private roteador: Roteador) { }

  ngOnInit() {
    let param = this.roteador.getParam();

    if (param && param['usuario']) {
      this.usuario = param['usuario'];
    }else{
      this.goBack();
    }
  }

  goBack(){
    this.roteador.goto('gerenciamento-usuario-listar');
  }

  salvar() {
    this.service.alterarUsuario(this.usuario)
      .then((response: any) => {
        if (response.codigoRetorno == 'SUCESSO') {
          this.mensagem.sucesso("Usuario alterado. ", 0);
        } else {
          this.mensagem.erro("Falha ao alterar usuário. " + response.mensagem ? response.mensagem : "", 0);
        }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao alterar usuário. " + erro.mensagem ? erro.mensagem : "", 0);
      });
  }

}
