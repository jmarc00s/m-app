import { environment } from './../../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseModel } from  '../models/base.model'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpBaseService<T extends BaseModel> {

  private _baseUrl: string = environment.urlApi;

  constructor(protected _http: HttpClient, private rotaApi: string) {}

  buscar(id: number): Observable<T>{
    return this._http.get<T>(this._baseUrl + this.rotaApi + `/${id}`);
  }

  buscarTodos(): Observable<T[]>{
    return this._http.get<T[]>(this._baseUrl + this.rotaApi);
  }

  criar(obj: T): Observable<T>{
    return this._http.post<T>(this._baseUrl + this.rotaApi, obj);
  }

  editar(obj: T): Observable<T> {
    return this._http.put<T>(this._baseUrl + this.rotaApi, obj);
  }

  remover(id: number): Observable<any>{
    return this._http.delete(this._baseUrl + this.rotaApi + `/${id}`);
  }

}
