import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private httpClient:  HttpClient) { }


  ObtenerTodosColaboradores():Observable<Colaborador[]>{
    return this.httpClient.get<Colaborador[]>("http://localhost:8080/colaborador/listar")
  }

  ObtenerUnColaborador(id:number):Observable<Colaborador>{
    return this.httpClient.get<Colaborador>("http://localhost:8080/colaborador/"+ id)
  }
   
  CrearColaborador (colaborador:Colaborador):Observable<Colaborador>{
    return this.httpClient.post<Colaborador>("http://localhost:8080/colaborador/",colaborador )
  }


}
