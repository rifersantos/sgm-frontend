import { Estado } from "./estado.model";

export class CidadeModel {
    nome: string;
    estado: Estado;

    constructor() {
        this.nome = '';
        this.estado = new Estado();
    }
}