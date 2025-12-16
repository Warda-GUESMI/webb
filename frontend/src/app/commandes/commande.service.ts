import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommandeService {

  API = 'http://localhost:5000/commandes';

  constructor(private http: HttpClient) {}

  headers(){
    return {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };
  }

  getAll(){
    return this.http.get<any[]>(this.API, this.headers());
  }
}
