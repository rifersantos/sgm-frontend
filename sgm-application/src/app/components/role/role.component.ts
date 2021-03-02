import { Component, OnInit } from '@angular/core';
import { RoleModel } from 'app/models/role.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles : Array<RoleModel>;

  constructor() { }
  

  ngOnInit() {
    let role : RoleModel = new RoleModel();
    role.id=1;
    role.nome="dasdasads";
    this.roles=new Array();
    this.roles.push(role);
  }

  mostraRoles(roles :  Array<RoleModel>) : void{
    this.roles = roles;
  }
}
