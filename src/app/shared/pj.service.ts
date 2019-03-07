import { Injectable } from '@angular/core';
import { PJ } from './pj.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PJService {

  formData  : PJ;
  list : PJ[];
  readonly rootURL ="http://api-server:7741/api"

  constructor(private http : HttpClient) { }

  postPJ(formData : PJ){
   return this.http.post(this.rootURL+'/PJ',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/PJ')
    .toPromise().then(res => this.list = res as PJ[]);
  }

  putPJ(formData : PJ){
    return this.http.put(this.rootURL+'/PJ/'+formData.PJID,formData);
     
   }

   deletePJ(id : number){
    return this.http.delete(this.rootURL+'/PJ/'+id);
   }
}
