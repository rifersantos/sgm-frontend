import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Roteador } from 'app/core/data/roteador-provider';
import { Projeto } from 'app/models/projeto.model';

@Component({
  selector: 'app-consultar-projetos-detalhes',
  templateUrl: './consultar-projetos-detalhes.component.html',
  styleUrls: ['./consultar-projetos-detalhes.component.scss']
})
export class ConsultarProjetosDetalhesComponent implements OnInit {
  public projeto : Projeto;
  public imagem : String;
  constructor(private router : Roteador, private dom:DomSanitizer) { }

  ngOnInit() {
    let parametros = this.router.getParam();
    this.mostrarProjeto(parametros);
  }

  mostrarProjeto (parametros:any) : any{
        debugger;
       this.projeto = parametros.projeto;
       // this.imagem = "data:image/png;base64,"+parametros.imagem;
        let pathReportString = 'data:image/png;base64,' + (this.dom.bypassSecurityTrustResourceUrl(parametros.imagem) as any).changingThisBreaksApplicationSecurity; 
        top.document.getElementById('ifrm').setAttribute("src", pathReportString);  
      
  }
}
