import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
//import { truncate } from 'fs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  route: Router;

  ROLE_MASTER: boolean;
  ROLE_GESTOR: boolean;
  ROLE_FUNCIONARIO: boolean;

  constructor(private router: Router, private authService : AuthService) {
    this.route = this.router;
  }

  ngOnInit() {
    this.ROLE_MASTER = false;
    this.ROLE_GESTOR = false;
    this.ROLE_FUNCIONARIO = false;
  }

    montaMenu():void{
     this.ROLE_MASTER=false;
     this.ROLE_GESTOR=false;
     this.ROLE_FUNCIONARIO=false;
     let role = this.authService.getUserRole();
     if(role=="ROLE_MASTER" || role=="ROLE_MASTER_AUXILIAR"){
       this.ROLE_MASTER=true;
     }else  if(role=="ROLE_GESTOR" || role=="ROLE_GESTOR_AUXILIAR"){
       this.ROLE_GESTOR=true;
     }else  if(role=="ROLE_FUNCIONARIO"){
       this.ROLE_FUNCIONARIO=true;
     }
   }
}
