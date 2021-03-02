import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {




  constructor() {
  }

  isCpf(cpf: string): boolean {
    if (cpf == null) {
      return false;
    }
    if (cpf.length != 11) {
      return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
      return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
      return false;
    }
    else {
      return true;
    }
  }

  isDate(data: string): boolean {
    if (Object.prototype.toString.call(new Date(data)) === "[object Date]") {
      // it is a date
      if (isNaN(new Date(data).getTime())) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  isEmailPermitido(email: string) {
    const listaEmailsPermitidos: string[] = ['sicoobnorte.com.br', 'sicoobcredisul.com.br', 'credip.com.br', 'sicoobcredip.com.br', 'sicoobourocredi.com.br', 'sicoobacre.com.br', 'sicoobcrediforte-ro.com.br', 'credijurd.com.br', 'sicoobvaledojamari.com.br', 'sicoobportocredi.com.br', 'sicoobcentro.com.br', 'sicoobmanaus.com.br', 'sicoob.com.br'];
    try {
      let dominio = email.split('@')[1];
      if (listaEmailsPermitidos.indexOf(dominio) > -1) {
        return true;
      } else {
        return false;
      }

    } catch (e) {
      return false;
    }
  }


  getFormattedDate(isoDate: string) {
    return new Date(isoDate);
  }

  getIndex(array: any[], item: any): any {
    if (array && item) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id == item.id) {
          return i;
        }
      }
    }
    return -1;
  }

  //funcao auxiliar para ordenar tables
  compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}