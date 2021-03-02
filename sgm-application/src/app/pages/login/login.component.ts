import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { TokenModel } from '../../models/token.model';
import { MessageComponent } from '../../components/message/message.component';
import { RoleComponent } from 'app/components/role/role.component';
import { RoleModel } from 'app/models/role.model';
import { CodigoRetorno } from 'app/enum/codigo-retorno.enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent;
  @ViewChild(RoleComponent) roleComponent: RoleComponent;
  cpf : string;
  password : string;
  roles : Array<RoleModel>;
  

  constructor(private loginService : LoginService,private router: Router) { 
  }
  
  ngOnInit() {
    
  }

  realizarLogin() : void {
      this.loginService.logar(this.cpf,this.password)
        .then((response : any) => {
          if(response.succeeded){
            //realizar o login do usuario e enviá-lo para a home
            let tokeModel : TokenModel = new TokenModel();
            tokeModel.token = response.jwtToken;
            sessionStorage.setItem("token",tokeModel.token);          
            console.log('token retornado',tokeModel.token);
            this.mensagem.sucesso("Login efetuado",3);
            this.router.navigate(['home']);
          }else if(!response.succeeded) {
            //chamar o serviço para recuperar as roles do usuário
            this.loginService.recuperarRoles(this.cpf,this.password)
            .then((response : any) => {
              if(response.codigoRetorno == CodigoRetorno.SUCESSO){
                //mostrar componente para escolher role
                this.roles = response.listObjeto;
              }else{
                this.mensagem.erro(response.codigoRetorno+" - "+ response.mensagem ? response.mensagem : "",0);
                this.router.navigate(['login']);
              }
            }) 
            .catch((erro) => {
              this.mensagem.erro("Falha ao realizar login",3);
              console.log('aconteceu um erro',erro);
            });
          }else{
            this.mensagem.erro(response.codigoRetorno+" - "+ response.mensagem ? response.mensagem : "",0);
            this.router.navigate(['login']);
          }
        }) 
        .catch((erro) => {
          this.mensagem.erro("Falha ao realizar login",3);
          console.log('aconteceu um erro',erro);
        });
  }

  loginRole(role: number) : void {
    this.loginService.logarComRole(this.cpf,this.password,role)
      .then((response : any) => {
        if(response.codigoRetorno == CodigoRetorno.SUCESSO){
          //realizar o login do usuario e enviá-lo para a home
          let tokeModel : TokenModel = response.objeto;
          sessionStorage.setItem("token",tokeModel.token);          
          console.log('token retornado',tokeModel.token);
          this.mensagem.sucesso("Login efetuado",3);
          this.router.navigate(['home']);
        }else{
          this.mensagem.erro(response.codigoRetorno+" - "+ response.mensagem ? response.mensagem : "",0);
          this.router.navigate(['login']);
        }
      }) 
      .catch((erro) => {
        this.mensagem.erro("Falha ao realizar login",3);
        console.log('aconteceu um erro',erro);
      });
  }



}
