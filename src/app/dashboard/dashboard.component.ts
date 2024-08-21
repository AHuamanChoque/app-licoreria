import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet,Router } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }
  
  irHome(){
    this.router.navigate(["home"],{relativeTo:this.route})
  }
  irProducto(){
    this.router.navigate(["producto"],{relativeTo:this.route})
  }
  irCategoria(){
    this.router.navigate(["categoria"],{relativeTo:this.route})
  }
  irCargo(){
    this.router.navigate(["cargo"],{relativeTo:this.route})
  }
  irCliente(){
    this.router.navigate(["cliente"],{relativeTo:this.route})
  }
  irColaborador(){
    this.router.navigate(["colaborador"],{relativeTo:this.route})
  }
  irProveedor(){
    this.router.navigate(["proveedor"],{relativeTo:this.route})
  }
  irTipoProveedor(){
    this.router.navigate(["tipoproveedor"],{relativeTo:this.route})
  }
  irPost(){
    this.router.navigate(["post"],{relativeTo:this.route})
  }
  irUsuario(){
    this.router.navigate(["usuario"],{relativeTo:this.route})
  }
  salir(){
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }


}
