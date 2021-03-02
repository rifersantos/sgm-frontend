import { RoleModel } from "./role.model";

export class Usuario{
    id : number;
    cpf : string;
    firstName : string;
    lastName : string;
    email : string;
    token : string;
    role : Array<RoleModel>;
    
    constructor (){
        this.id=null;
        this.cpf='';
        this.firstName='';
        this.lastName='';
        this.email='';
        this.token='';
        this.role=new Array<RoleModel>();
    }
}