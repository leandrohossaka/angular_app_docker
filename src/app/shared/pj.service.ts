import { Injectable } from '@angular/core';
import { PJ } from './pj.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PJService {

  formData  : PJ;
  list : PJ[];
  //readonly rootURL ="http://api-server:80/api"
  readonly rootURL ="http://localhost"

  constructor(private http : HttpClient) { }

  postPJ(formData : PJ){
   return this.http.post(this.rootURL+'/client_pj/inserir',formData);    
  }

  refreshList(){
    this.http.get(this.rootURL+'/client_pj/listar_clientes')
    .toPromise().then(res => this.list = res as PJ[]);
  }

  putPJ(formData : PJ){
    return this.http.post(this.rootURL+'/client_pj/alterar/',formData);     
   }

   deletePJ(formData : PJ){
    return this.http.post(this.rootURL+'/client_pj/excluir/',formData);
   }
}
