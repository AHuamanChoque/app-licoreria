import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient:HttpClient) { }

  ObtenerTodasCategorias():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>("http://localhost:8080/categoria/listar")
  }

  ObtenerUnaCategoria(id:number):Observable<Categoria>{
    return this.httpClient.get<Categoria>("http://localhost:8080/categoria/"+ id)
  }
   
  CrearCategoria (categoria:Categoria):Observable<Categoria>{
    return this.httpClient.post<Categoria>("http://localhost:8080/categoria/",categoria )
  }
   

}
