import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from 'app/components/message/message.component';
import { Projeto } from 'app/models/projeto.model';
import { ConsultarProjetosListarService } from './consultar-projetos-listar.service';

@Component({
  selector: 'app-consultar-projetos-listar',
  templateUrl: './consultar-projetos-listar.component.html',
  styleUrls: ['./consultar-projetos-listar.component.scss']
})
export class ConsultarProjetosListarComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent

  public listaProjetos : Array<Projeto>;
  constructor(private service : ConsultarProjetosListarService) { }

  ngOnInit() {
    this.consultarProjetos();

  }
  consultarProjetos(){
    debugger;
    this.service.listarProjetos()
      .then((response: any) => {
          this.listaProjetos = response.projects;
          debugger;
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao recuperar projetos. " + erro.mensagem ? erro.mensagem : "", 0);
      });

  }
}
