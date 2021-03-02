export class RetornoServiceModel {
    status : number;
    mensagem : string;
    body : any;
    
    constructor ( status : number, mensagem : string, body : any){
        this.status=status;
        this.mensagem=mensagem;
        this.body=body;
    }
}