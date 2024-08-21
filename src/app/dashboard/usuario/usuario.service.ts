import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }
  
  ObtenerTodosUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>("http://localhost:8080/usuario/listar")
  }

  ObtenerUnUsuario(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>("http://localhost:8080/usuario/"+ id)
  }
   
  CrearUsuario(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>("http://localhost:8080/usuario/",usuario )
  }

}
