import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient:  HttpClient) { }


  ObtenerTodosClientes():Observable<Clientes[]>{
    return this.httpClient.get<Clientes[]>("http://localhost:8080/clientes/listar")
  }

  ObtenerUnCliente(id:number):Observable<Clientes>{
    return this.httpClient.get<Clientes>("http://localhost:8080/clientes/"+ id)
  }
   
  CrearCliente (cliente:Clientes):Observable<Clientes>{
    return this.httpClient.post<Clientes>("http://localhost:8080/clientes/",cliente )
  }


}
