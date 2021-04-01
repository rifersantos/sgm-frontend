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

  admin: boolean;
  citizen: boolean;
  employee: boolean;

  constructor(private router: Router, private authService : AuthService) {
    this.route = this.router;
  }

  ngOnInit() {
    this.admin = false;
    this.citizen = false;
    this.employee = false;
  }

    montaMenu():void{
     this.admin=false;
     this.citizen=false;
     this.employee=false;
     let role = this.authService.getUserRole();
     if(role=="admin" || role.indexOf("admin") > -1){
       this.admin=true;
     }
     if(role=="citizen"|| role.indexOf("citizen") > -1){
       this.citizen=true;
     }
     if(role=="employee"|| role.indexOf("employee") > -1){
       this.employee=true;
     }
   }
}
