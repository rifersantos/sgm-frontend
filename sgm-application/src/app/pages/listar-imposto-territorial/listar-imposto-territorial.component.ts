import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageComponent } from 'app/components/message/message.component';
import { Roteador } from 'app/core/data/roteador-provider';
import { ListarImpostoTerritorialService } from './listar-imposto-territorial.service';

@Component({
  selector: 'app-listar-imposto-territorial',
  templateUrl: './listar-imposto-territorial.component.html',
  styleUrls: ['./listar-imposto-territorial.component.scss']
})
export class ListarImpostoTerritorialComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent;

  constructor(private service : ListarImpostoTerritorialService,private router: Roteador,private dom:DomSanitizer) { 

  }

  public pdfbase64 : String;

  ngOnInit() {
    let parametros = this.router.getParam();
    this.recuperarImposto(parametros);
  }

  recuperarImposto(parametros:any) : any{
    this.service.listarImpostoTerritorial(parametros)

    .then((response : any) => {
      if(response.succeeded){
        debugger;
        let pathReportString = 'data:application/pdf;base64,' + (this.dom.bypassSecurityTrustResourceUrl(response.file) as any).changingThisBreaksApplicationSecurity; 
        top.document.getElementById('ifrm').setAttribute("src", pathReportString);  
      }else if(!response.succeeded) {
            debugger;
            this.mensagem.erro(response.erro,0);
            this.router.goto('imposto-territorial');
          
      }
    }).catch((erro) => {
          this.mensagem.erro("Falha",3);
          console.log('aconteceu um erro',erro);
        });
      }

}
