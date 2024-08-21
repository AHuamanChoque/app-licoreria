import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Colaborador } from '../colaborador';
import { ColaboradorService } from '../colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-colaborador-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './colaborador-lista.component.html',
  styleUrl: './colaborador-lista.component.css'
})
export class ColaboradorListaComponent {
  displayedColumns: string[] = ['codcolaborador', 'nombrecol', 'apellidocol', 'telefonocol','correocol','dnicol','estado','cargo'];
  colaboradores: Colaborador[] = []


  constructor(private colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.colaboradorService.ObtenerTodosColaboradores().subscribe((data) =>{
      //console.log(data)
      this.colaboradores= data
    })
  }
  
  irDetalleColaborador(id:string){
    this.router.navigate([id],{relativeTo: this.route})
  }
  
  irCrearColaborador(){
    this.router.navigate(["nuevo"],{relativeTo: this.route})
  }


}


