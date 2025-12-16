import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArticleService {

  API = 'http://localhost:5000/articles';

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

  create(data:any){
    return this.http.post(this.API, data, this.headers());
  }

  delete(id:string){
    return this.http.delete(`${this.API}/${id}`, this.headers());
  }
}
