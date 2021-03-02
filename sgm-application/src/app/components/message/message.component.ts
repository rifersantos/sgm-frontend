import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public mensagem : string;
  private mensagemTipo: string;
  private classes : {} = {'alert':true};
  private currentTimeout:any;
  constructor() { }

  ngOnInit() {
    this.mensagem = "";
  }
  
  show(mensagem:string, tipo:string, tempo: number){ 
    window.scrollTo(0, 0)   
    
    if(tipo == "sucesso"){
      this.sucesso(mensagem,tempo);
    }else if(tipo == "erro"){
      this.erro(mensagem,tempo);
    }else if(tipo == "info"){
      this.info(mensagem,tempo);
    }else if(tipo == "warning"){
      this.warning(mensagem,tempo);
    }
    
  }


  sucesso(msg : string, tempo: number):void{
    this.mostraMensagem(msg,tempo);
    this.mensagemTipo="Sucesso! ";
    this.classes['alert-success']=true;
    this.classes['alert-warning']=false;
    this.classes['alert-danger']=false;
    this.classes['alert-info']=false;
  }

  erro(msg : string, tempo: number):void{
    this.mensagemTipo="Erro! ";
    this.mostraMensagem(msg,tempo);
    this.classes['alert-danger']=true;
    this.classes['alert-warning']=false;
    this.classes['alert-info']=false;
    this.classes['alert-success']=false;
  }

  info(msg : string, tempo: number):void{
    this.mensagemTipo="Informação: ";
    this.mostraMensagem(msg,tempo);
    this.classes['alert-info']=false;
    this.classes['alert-warning']=true;
    this.classes['alert-danger']=false;
    this.classes['alert-success']=false;
  }
 
  warning(msg : string, tempo: number):void{
    this.mensagemTipo="Alerta! ";
    this.mostraMensagem(msg,tempo);
    this.classes['alert-warning']=true;
    this.classes['alert-danger']=false;
    this.classes['alert-info']=false;
    this.classes['alert-success']=false;
  } 

  mostraMensagem(msg : string,tempo : number):void{
    window.scrollTo(0, 0)
    this.mensagem=msg;
    if(this.currentTimeout){
      clearTimeout(this.currentTimeout);
    }
    if(tempo > 0){
      this.currentTimeout=setTimeout(() => {this.mensagem=undefined},tempo*1000);
    }
  }

  close():void{
    if(this.currentTimeout){
      clearTimeout(this.currentTimeout);
    }
    this.mensagem=undefined;
  }
}
