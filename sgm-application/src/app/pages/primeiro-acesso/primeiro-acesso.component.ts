import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeiroAcesso } from 'app/models/primeiroAcesso.model';
import { UtilService } from 'app/util/util.service';
import { MessageComponent } from 'app/components/message/message.component';
import { PrimeiroAcessoService } from './primeiro-acesso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.scss']
})
export class PrimeiroAcessoComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent
  primeiroAcesso : PrimeiroAcesso;
  private erros : string;
  private emailPattern =  new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9!#$%&'*+/=?^_`{|}~-]+\.[a-z]+(\.[a-z]+)?$");

  constructor(private util : UtilService, private service: PrimeiroAcessoService, private router : Router) { }

  ngOnInit() {
    this.primeiroAcesso = new PrimeiroAcesso();
  }

  confirmarUsuario():void{
    if(this.validaDados()){
      this.service.confirmarUsuario(this.primeiroAcesso)
      .then((response: any) => {
        if (response.succeeded) {
          this.mensagem.sucesso("Seu cadastro foi concluído com sucesso. Utilize o seu CPF e senha para acessar o sistema. Você está sendo redirecionado para a tela login...",0);
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 5000);
        } else {
          this.mensagem.erro(response.error.errors[0] ,0);
        }
      })
      .catch((erro) => {
        this.mensagem.erro("Falha ao realizar cadastro" + erro ? erro : "",0);
      });
    }else{
      this.mensagem.erro("Verifique os erros abaixo: \n"+this.erros,0);
    }
  }

  validaDados():boolean{
    this.erros="";
    let sucesso : boolean = true;
    if(!this.emailPattern.test(this.primeiroAcesso.Email)){
      this.erros+="E-mail inválido.\n";
      sucesso=false;
    }
    if(!this.util.isCpf(this.primeiroAcesso.Cpf)){
      this.erros+="CPF incorreto.\n";
      sucesso=false;
    }    
    return sucesso;
  }
}
