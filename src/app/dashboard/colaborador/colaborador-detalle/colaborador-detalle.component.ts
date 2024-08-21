import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProveedorService } from '../../proveedor/proveedor.service';
import { ActivatedRoute } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear= 0,
  Actualizar = 1
}


@Component({
  selector: 'app-colaborador-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './colaborador-detalle.component.html',
  styleUrl: './colaborador-detalle.component.css'
})
export class ColaboradorDetalleComponent {
  colaboradorId: string| null =  ''
  colaboradorForm!: FormGroup
  formType!: FormType 
  formTitulo!: string

  constructor(private colaboradorService: ColaboradorService,
    private router: ActivatedRoute
  ){

  }


  
  ngOnInit(): void {
    this.colaboradorId = this.router.snapshot.paramMap.get('id')
    this.colaboradorForm = this.crearFormulario()
    if(this.colaboradorId !== 'nuevo'){
      this.consultarColaborador(Number(this.colaboradorId))
      this.formTitulo="Actualizar Colaborador"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Colaborador"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      nombrecol: new FormControl(''),
      apellidocol: new FormControl(''),
      telefonocol: new FormControl(''),
      correocol: new FormControl(''),
      dnicol: new FormControl(''),
      estado: new FormControl(''),
      cargo: new FormControl('')
      
    })
  }

  consultarColaborador(id: number){
    this.colaboradorService.ObtenerUnColaborador(id).subscribe((data)=>{
      console.log(data)
      const {nombrecol,apellidocol,telefonocol,correocol,dnicol,estado,cargo} = data
      this.colaboradorForm.setValue({
        nombrecol,apellidocol,telefonocol,correocol,dnicol,estado,cargo
      })

    })
  }



}
