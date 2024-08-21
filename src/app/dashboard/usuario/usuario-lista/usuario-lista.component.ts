import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export class UsuarioListaComponent {
  displayedColumns: string[] = ['idusuario', 'nickusuario','correousuario','password','dniusuario','nombreusuario','apellidosusuario','activo'];
  usuarios: Usuario[] = []

  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }


  
ngOnInit(): void {
  this.usuarioService.ObtenerTodosUsuarios().subscribe((data) =>{
    //console.log(data)
    this.usuarios= data
  })
}

irDetalleUsuario(id:string){
  this.router.navigate([id],{relativeTo: this.route})
}

irCrearUsuario(){
  this.router.navigate(["nuevo"],{relativeTo: this.route})
}



}
