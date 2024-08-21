import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:  HttpClient) { }


  ObtenerTodosProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>("http://localhost:8080/producto/listar")
  }

  ObtenerUnProducto(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>("http://localhost:8080/producto/"+ id)
  }
   
  CrearProducto (producto:Producto):Observable<Producto>{
    return this.httpClient.post<Producto>("http://localhost:8080/producto/",producto )
  }

}
