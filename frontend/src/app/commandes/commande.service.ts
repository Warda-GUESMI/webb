import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommandeService {

  API = 'http://localhost:5201/api/commandes';

  constructor(private http: HttpClient) {}

  headers() {
    return {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.API, this.headers());
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`, this.headers());
  }

  create(data: any): Observable<any> {
    return this.http.post(this.API, data, this.headers());
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.API}/${id}`, data, this.headers());
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`, this.headers());
  }
}
