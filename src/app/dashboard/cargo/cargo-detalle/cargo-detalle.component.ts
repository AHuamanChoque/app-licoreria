import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { CargoService } from '../cargo.service';
import { ActivatedRoute } from '@angular/router';

enum FormType{
  Crear= 0,
  Actualizar = 1
}

@Component({
  selector: 'app-cargo-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './cargo-detalle.component.html',
  styleUrl: './cargo-detalle.component.css'
})
export class CargoDetalleComponent {
  cargoId: string| null =  ''
  cargoForm!: FormGroup
  formType!: FormType 
  formTitulo!: string

  constructor(private cargoService: CargoService,
    private router: ActivatedRoute
  ){

  }

  
  ngOnInit(): void {
    this.cargoId = this.router.snapshot.paramMap.get('id')
    this.cargoForm = this.crearFormulario()
    if(this.cargoId !== 'nuevo'){
      this.consultarCategoria(Number(this.cargoId))
      this.formTitulo="Actualizar Cargo"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Cargo"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      nombrecargo: new FormControl('')
    })
  }


  consultarCategoria(id: number){
    this.cargoService.ObtenerUnaCargo(id).subscribe((data)=>{
      console.log(data)
      const {nombrecargo} = data
      this.cargoForm.setValue({
        nombrecargo
      })

    })
  }



}
