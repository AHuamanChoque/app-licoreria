import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear= 0,
  Actualizar = 1
}

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent {
  usuarioId: string| null =  ''
  usuarioForm!: FormGroup
  formType!: FormType 
  formTitulo!: string

  constructor(private usuarioService: UsuarioService,
    private router: ActivatedRoute
  ){

  }


  ngOnInit(): void {
    this.usuarioId = this.router.snapshot.paramMap.get('id')
    this.usuarioForm = this.crearFormulario()
    if(this.usuarioId !== 'nuevo'){
      this.consultarUsuario(Number(this.usuarioId))
      this.formTitulo="Actualizar Usuario"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Usuario"
      this.formType = FormType.Crear
      console.log("NUEVO")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      nickusuario: new FormControl(''),
      correousuario: new FormControl(''),
      dniusuario: new FormControl(''),
      nombreusuario: new FormControl(''),
      apellidosusuario: new FormControl(''),
      activo: new FormControl('')
      
    })
  }

  consultarUsuario(id: number){
    this.usuarioService.ObtenerUnUsuario(id).subscribe((data)=>{
      console.log(data)
      const {nickusuario,correousuario,dniusuario,nombreusuario,apellidosusuario,activo} = data
      this.usuarioForm.setValue({
        nickusuario,correousuario,dniusuario,nombreusuario,apellidosusuario,activo
      })

    })
  }




}
