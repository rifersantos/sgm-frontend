import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../core/loader/loader.service';
import { RetornoServiceModel } from 'app/models/retornoService.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private _http: HttpClient,
    private router: Router,
    private loaderService: LoaderService) {

  }

  private getContextRootUrl(url :String){
    return environment.contextRoot + url;
  }
  
  private headers: HttpHeaders;
  private setHeaders() {
    this.headers = new HttpHeaders();
    let token = sessionStorage.getItem('token');
    if (token != null && token != "" && token != undefined) {
      this.headers = this.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
      .set('Access-Control-Allow-Origin', '*');
    }
    
    
  }
  private setHeadersMP() {
    let token = sessionStorage.getItem('token');
    if (token != null && token != "" && token != undefined) {
      this.headers = new HttpHeaders();
      this.headers = this.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token')).
        set('Accept', 'application/json');
    }
  }

  private setHeadersPDF() {
    let token = sessionStorage.getItem('token');
    if (token != null && token != "" && token != undefined) {
      this.headers = new HttpHeaders();
      this.headers = this.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token')).
        set('Accept', 'application/json').set('responseType', 'arraybuffer as json');
    }
  }

  get(url: string, param?: any): Promise<any> {
    this.setHeaders();
    this.showLoader();
    return new Promise((resolve, reject) => {
      this._http.get<any[]>(this.getContextRootUrl(url), { headers: this.headers, params: param })
        .toPromise()
        .then(
          res => { // Success 
            resolve(res);
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }

  post(url: string, params: any): Promise<any> {
    debugger;
    this.showLoader();
    this.setHeaders();
    return new Promise((resolve, reject) => {
      this._http.post(this.getContextRootUrl(url), params, { headers: this.headers })
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }

  put(url: string, params: any): Promise<any> {
    this.showLoader();
    this.setHeaders();
    return new Promise((resolve, reject) => {
      this._http.put(this.getContextRootUrl(url), params, { headers: this.headers })
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }

  delete(url: string, id: number): Promise<any> {

    this.showLoader();
    this.setHeaders();
    let urlDelete = url + "/" + id;
    return new Promise((resolve, reject) => {
      this._http.delete(urlDelete, { headers: this.headers })
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }

  postNA(url: string, params: any): Promise<any> {
    this.showLoader();
    return new Promise((resolve, reject) => {
      this._http.post(this.getContextRootUrl(url), params)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }


  getNA(url: string): Promise<any> {
    this.showLoader();
    this.setHeaders();
    return new Promise((resolve, reject) => {
      this._http.get(url)
        .toPromise()
        .then(
          res => { // Success            
            resolve(this.tratarRetorno(res));
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }

  postMP(url: string, params: any): Promise<any> {
    this.showLoader();
    this.setHeadersMP();
    return new Promise((resolve, reject) => {
      this._http.post(this.getContextRootUrl(url), params, { headers: this.headers })
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }

  getPDF(url: string, id: number) {
    url=url+'?id='+id;
    const httpOptions = {
      'responseType'  : 'arraybuffer' as 'json',
    };
    
    return this._http.get<any>(this.getContextRootUrl(url), httpOptions);

  }

  tratarErro(erro: number) {
    if (erro == 401) {
      this.router.navigate(['/login']);
    } else if (erro == 500) {
      //serviço indisponível
    }
  }

  //get autenticado usando parâmetro
  // não sei se é a melhor maneira de fazer, eu concatenei a url com o param
  getByParam(url: string, param?: any): Promise<any> {
    this.setHeaders();
    this.showLoader();
    return new Promise((resolve, reject) => {
      this._http.get(this.getContextRootUrl(url), { headers: this.headers, params: param })
        .toPromise()
        .then(
          res => { // Success 
            resolve(res);
            this.onEnd();
          },
          msg => { // Error
            this.tratarErro(msg.status);
            reject(msg);
            this.onEnd();
          }
        );
    });
  }

  tratarRetorno(res): RetornoServiceModel {
    return new RetornoServiceModel(res.status, res.statusText, JSON.parse(res.text));
  }

  private onEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
