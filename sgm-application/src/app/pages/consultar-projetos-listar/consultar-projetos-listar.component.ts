import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from 'app/components/message/message.component';
import { Roteador } from 'app/core/data/roteador-provider';
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
  constructor(private service : ConsultarProjetosListarService, private roteador : Roteador) { 
    this.listaProjetos = new Array<Projeto>();
  }

  ngOnInit() {
    this.consultarProjetos();

  }
  consultarProjetos(){
    this.service.listarProjetos()
      .then((response: any) => {
          console.log(response);
          this.listaProjetos = this.normalizarNomes(response.projects);
          if(this.listaProjetos.length < 1){
            this.mensagem.info("Não foram encontrados projetos para serem visualizados.",0)
          }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao recuperar projetos. " + erro.mensagem ? erro.mensagem : "", 0);
      });

  }

  visualizar(projeto : Projeto){
    this.service.buscarProjeto(projeto.id)
      .then((response: any) => {
          console.log(response);
          this.roteador.gotoParam("consulta-projetos-detalhes",{"projeto":projeto,"imagem":response.ganttProject.content});
          this.listaProjetos = response.projects;
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao recuperar Projeto id="+projeto.id +"\n" + erro.mensagem ? erro.mensagem : "", 0);
      });
  }

  normalizarNomes(projetos : Array<Projeto>) : Array<Projeto>{
    for (let index = 0; index < projetos.length; index++) {
      projetos[index].name = projetos[index].name.replace(".png","");
    }
    return projetos;
  }
}
