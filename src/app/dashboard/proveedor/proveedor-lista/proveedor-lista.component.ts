import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';




@Component({
  selector: 'app-proveedor-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './proveedor-lista.component.html',
  styleUrl: './proveedor-lista.component.css'
})
export class ProveedorListaComponent {
  displayedColumns: string[] = ['codproveedor', 'razonsocial', 'rucproveedor', 'telefonoproveedor','codtipoprovee'];
  proveedores: Proveedor[] = []


  constructor(private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }


  
  ngOnInit(): void {
    this.proveedorService.ObtenerTodosProveedores().subscribe((data) =>{
      //console.log(data)
      this.proveedores= data
    })
  }
  
  irDetalleProveedor(id:string){
    this.router.navigate([id],{relativeTo: this.route})
  }
  
  irCrearProveedor(){
    this.router.navigate(["nuevo"],{relativeTo: this.route})
  }

}
