import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from './cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private httpClient:HttpClient) { }


  ObtenerTodosCargos():Observable<Cargo[]>{
    return this.httpClient.get<Cargo[]>("http://localhost:8080/cargo/listar")
  }

  ObtenerUnaCargo(id:number):Observable<Cargo>{
    return this.httpClient.get<Cargo>("http://localhost:8080/cargo/"+ id)
  }
   
  CrearCargo (categoria:Cargo):Observable<Cargo>{
    return this.httpClient.post<Cargo>("http://localhost:8080/cargo/",categoria )
  }
}
