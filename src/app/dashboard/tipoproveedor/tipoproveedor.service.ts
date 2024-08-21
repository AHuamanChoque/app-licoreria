import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoProveedor } from './tipoproveedor';

@Injectable({
  providedIn: 'root'
})
export class TipoproveedorService {

  constructor(private httpClient:HttpClient) { }
  
  ObtenerTodosTiposProveedores():Observable<TipoProveedor[]>{
    return this.httpClient.get<TipoProveedor[]>("http://localhost:8080/tipoproveedor/listar")
  }

  ObtenerUnaTipoProveedor(id:number):Observable<TipoProveedor>{
    return this.httpClient.get<TipoProveedor>("http://localhost:8080/tipoproveedor/"+ id)
  }
   
  CrearTipoProveedor(tipoproveedor:TipoProveedor):Observable<TipoProveedor>{
    return this.httpClient.post<TipoProveedor>("http://localhost:8080/tipoproveedor/",tipoproveedor )
  }

}
