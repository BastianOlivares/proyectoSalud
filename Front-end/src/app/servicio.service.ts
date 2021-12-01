import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {

  }

  GetUsuarios(): Observable<any>{
    return this.http.get(`${environment.hostname}/Sacar`);
  }
  PostUsuario(insertar:any): Observable<any>{

    return this.http.get(`${environment.hostname}/Insertar`/*JSON.stringify(insertar)*/); ///<--------------------
  }

}
