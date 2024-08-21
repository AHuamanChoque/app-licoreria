import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private httpClient:  HttpClient) { }

  ObtenerTodosProveedores():Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>("http://localhost:8080/proveedor/listar")
  }

  ObtenerUnProveedor(id:number):Observable<Proveedor>{
    return this.httpClient.get<Proveedor>("http://localhost:8080/proveedor/"+ id)
  }
   
  CrearProveedor (proveedor:Proveedor):Observable<Proveedor>{
    return this.httpClient.post<Proveedor>("http://localhost:8080/proveedor/",proveedor )
  }



}
