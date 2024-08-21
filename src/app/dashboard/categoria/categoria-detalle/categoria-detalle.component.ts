import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear= 0,
  Actualizar = 1
}


@Component({
  selector: 'app-categoria-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './categoria-detalle.component.html',
  styleUrl: './categoria-detalle.component.css'
})
export class CategoriaDetalleComponent {
  categoriaId: string| null =  ''
  categoriaForm!: FormGroup
  formType!: FormType 
  formTitulo!: string

  constructor(private categoriaService: CategoriaService,
    private router: ActivatedRoute
  ){

  }


  ngOnInit(): void {
    this.categoriaId = this.router.snapshot.paramMap.get('id')
    this.categoriaForm = this.crearFormulario()
    if(this.categoriaId !== 'nuevo'){
      this.consultarCategoria(Number(this.categoriaId))
      this.formTitulo="Actualizar Categoria"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nueva Categoria"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      nombrecategoria: new FormControl('')
    })
  }


  consultarCategoria(id: number){
    this.categoriaService.ObtenerUnaCategoria(id).subscribe((data)=>{
      console.log(data)
      const {nombrecategoria} = data
      this.categoriaForm.setValue({
        nombrecategoria
      })

    })
  }

}
