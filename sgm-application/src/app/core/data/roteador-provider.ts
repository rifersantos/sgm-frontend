import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class Roteador {

    private storage: any;

    public constructor(private router: Router,private location: Location) { }

    gotoParam(rota : String, param : any): void {
        this.storage=param;
        this.router.navigate([rota]);
    }

    goto(rota : String): void {
        this.router.navigate([rota]);
    }

    getParam():any{
        let retorno = this.storage;
        this.storage=undefined;
        return retorno;
    }

    setParam(param : any):void{
        this.storage=param;
    }

    goBack(){
        this.location.back();
    }

}