import { Injectable } from '@angular/core';
import { RoleModel } from 'app/models/role.model';
import { Usuario } from 'app/models/usuario.model';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserRole(): any {
    try {
      let token = sessionStorage.getItem('token');
      if (token != null && token != "" && token != undefined) {
        let role = jwt_decode(sessionStorage.getItem("token")).role;
        if(role.length > 3){
          let roleArray = new Array<String>(role);
          return roleArray;
        }
        return role;
      } else {
        return undefined;
      }
    }
    catch (Error) {
      return null;
    }
  }

  getUsuario(): Usuario {
    let usuario = new Usuario();
    try {

      let token = sessionStorage.getItem('token');
      if (token != null && token != "" && token != undefined) {
        
        let decodedJwt = jwt_decode(token);
        usuario.cpf=decodedJwt.cpf;
        usuario.firstName=decodedJwt.unique_name;
        usuario.lastName=decodedJwt.lastName;
        usuario.email=decodedJwt.email;
        let roles = new Array<RoleModel>();
        let role = new RoleModel;
        role=decodedJwt.role;
        roles.push(role);
        usuario.role=roles;

    


        return usuario;
      } else {
        return undefined;
      }
    }
    catch (Error) {
      return null;
    }
  }
}
