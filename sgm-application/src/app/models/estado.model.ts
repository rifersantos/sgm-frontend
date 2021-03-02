export class Estado {
    id: number;
    nome: string;
    sigla: string;
    /*
        constructor(id: number, nome: string, sigla: string) {
            this.id = id;
            this.nome = nome;
            this.sigla = sigla;
        }
    */
    constructor() {
        this.id = null;
        this.nome = '';
        this.sigla = '';
    }
}