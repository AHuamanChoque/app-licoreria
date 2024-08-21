import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';



@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [MaterialModule,MatListModule,MatTableModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css',
})
export class ProductoListaComponent {
  displayedColumns: string[] = ['codproducto', 'nombreprod', 'precioprod', 'stockprod','activo','nombrecategoria','razonsocial'];
  productos: Producto[] = []


  constructor(private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.productoService.ObtenerTodosProductos().subscribe((data) =>{
      //console.log(data)
      this.productos= data
    })
  }
  
  irDetalleProducto(id:string){
    this.router.navigate([id],{relativeTo: this.route})
  }
  
  irCrearProducto(){
    this.router.navigate(["nuevo"],{relativeTo: this.route})
  }


}

