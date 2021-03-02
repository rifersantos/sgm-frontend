import { Estado } from "./estado.model";

export class Endereco {
    id: number;
    denominacao: string;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: Estado; //mudar aqui
    referencia: string;

    constructor(){}
  
     /*   constructor(id: number, denominacao: string, cep: string, logradouro: string,
           numero: number, complemento: string, bairro: string, cidade: string, 
           estado: Estado, referencia: string ){
        this.id = id;
        this.denominacao = denominacao;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.referencia = referencia;*/
    }


