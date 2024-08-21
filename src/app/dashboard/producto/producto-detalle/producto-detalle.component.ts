import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear= 0,
  Actualizar = 1
}

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule,FormsModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  productoId: string| null =  ''
  productoForm!: FormGroup
  formType!: FormType 
  formTitulo!: string


  constructor(private productoService: ProductoService,
    private router: ActivatedRoute
  ){

  }


  ngOnInit(): void {
    this.productoId = this.router.snapshot.paramMap.get('id')
    this.productoForm = this.crearFormulario()
    if(this.productoId !== 'nuevo'){
      this.consultarProducto(Number(this.productoId))
      this.formTitulo="Actualizar Producto"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Producto"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      nombreprod: new FormControl(''),
      precioprod: new FormControl(''),
      stockprod: new FormControl(''),
      activo: new FormControl(''),
      razonsocial: new FormControl(''),
      nombrecategoria: new FormControl('')
      
    })
  }

  consultarProducto(id: number){
    this.productoService.ObtenerUnProducto(id).subscribe((data)=>{
      console.log(data)
      const {nombreprod,precioprod,stockprod,activo,razonsocial,nombrecategoria} = data
      this.productoForm.setValue({
        nombreprod,precioprod,stockprod,activo,razonsocial,nombrecategoria
      })

    })
  }



}
