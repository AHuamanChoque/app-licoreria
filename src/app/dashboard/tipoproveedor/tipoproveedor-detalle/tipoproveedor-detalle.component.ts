import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { TipoproveedorService } from '../tipoproveedor.service';
import { ActivatedRoute } from '@angular/router';

enum FormType{
  Crear= 0,
  Actualizar = 1
}

@Component({
  selector: 'app-tipoproveedor-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './tipoproveedor-detalle.component.html',
  styleUrl: './tipoproveedor-detalle.component.css'
})
export class TipoproveedorDetalleComponent {
  tipoproveedorId: string| null =  ''
  tipoproveedorForm!: FormGroup
  formType!: FormType 
  formTitulo!: string

  constructor(private tipoproveedorService: TipoproveedorService,
    private router: ActivatedRoute
  ){

  }


    
  ngOnInit(): void {
    this.tipoproveedorId = this.router.snapshot.paramMap.get('id')
    this.tipoproveedorForm = this.crearFormulario()
    if(this.tipoproveedorId !== 'nuevo'){
      this.consultarProveedor(Number(this.tipoproveedorId))
      this.formTitulo="Actualizar Distrito Proveedor"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Distrito Proveedor"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      descripcion: new FormControl('')

    })
  }


  consultarProveedor(id: number){
    this.tipoproveedorService.ObtenerUnaTipoProveedor(id).subscribe((data)=>{
      console.log(data)
      const {descripcion} = data
      this.tipoproveedorForm.setValue({
        descripcion
      })

    })
  }



}
