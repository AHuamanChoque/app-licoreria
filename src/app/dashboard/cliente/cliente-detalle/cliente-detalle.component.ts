import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear= 0,
  Actualizar = 1
}

@Component({
  selector: 'app-cliente-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './cliente-detalle.component.html',
  styleUrl: './cliente-detalle.component.css'
})
export class ClienteDetalleComponent {
  clienteId: string| null =  ''
  clienteForm!: FormGroup
  formType!: FormType 
  formTitulo!: string

  constructor(private clienteService: ClienteService,
    private router: ActivatedRoute
  ){

  }



  ngOnInit(): void {
    this.clienteId = this.router.snapshot.paramMap.get('id')
    this.clienteForm = this.crearFormulario()
    if(this.clienteId !== 'nuevo'){
      this.consultarCliente(Number(this.clienteId))
      this.formTitulo="Actualizar Cliente"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Cliente"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      dnicli: new FormControl(''),
      nombrecli: new FormControl(''),
      apellidocli: new FormControl(''),
      celularcli: new FormControl(''),
      correocli: new FormControl(''),
      edadcli: new FormControl(''),
      sexocli: new FormControl(''),
      direccioncli: new FormControl('')
    })
  }

  consultarCliente(id: number){
    this.clienteService.ObtenerUnCliente(id).subscribe((data)=>{
      console.log(data)
      const {dnicli,nombrecli,apellidocli,celularcli,correocli,edadcli,sexocli,direccioncli} = data
      this.clienteForm.setValue({
        dnicli,nombrecli,apellidocli,celularcli,correocli,edadcli,sexocli,direccioncli
      })

    })
  }


}
