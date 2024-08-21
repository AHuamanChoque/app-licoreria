import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear= 0,
  Actualizar = 1
}


@Component({
  selector: 'app-proveedor-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule , MaterialModule],
  templateUrl: './proveedor-detalle.component.html',
  styleUrl: './proveedor-detalle.component.css'
})
export class ProveedorDetalleComponent {
  proveedorId: string| null =  ''
  proveedorForm!: FormGroup
  formType!: FormType 
  formTitulo!: string

  constructor(private proveedorService: ProveedorService,
    private router: ActivatedRoute
  ){

  }




  ngOnInit(): void {
    this.proveedorId = this.router.snapshot.paramMap.get('id')
    this.proveedorForm = this.crearFormulario()
    if(this.proveedorId !== 'nuevo'){
      this.consultarProveedor(Number(this.proveedorId))
      this.formTitulo="Actualizar Proveedor"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Proveedor"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      razonsocial: new FormControl(''),
      rucproveedor: new FormControl(''),
      telefonoproveedor: new FormControl('')
      
    })
  }

  consultarProveedor(id: number){
    this.proveedorService.ObtenerUnProveedor(id).subscribe((data)=>{
      console.log(data)
      const {razonsocial,rucproveedor,telefonoproveedor} = data
      this.proveedorForm.setValue({
        razonsocial,rucproveedor,telefonoproveedor
      })

    })
  }



}
