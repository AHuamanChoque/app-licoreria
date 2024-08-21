import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { CargoService } from '../cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../cargo';



@Component({
  selector: 'app-cargo-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cargo-lista.component.html',
  styleUrl: './cargo-lista.component.css'
})
export class CargoListaComponent {
  displayedColumns: string[] = ['codcargo', 'nombrecargo'];
  cargos: Cargo[] = []

  constructor(private cargoService: CargoService,
    private route: ActivatedRoute,
    private router: Router
){

}

ngOnInit(): void {
  this.cargoService.ObtenerTodosCargos().subscribe((data) =>{
    //console.log(data)
    this.cargos= data
  })
}

irDetalleCargo(id:string){
  this.router.navigate([id],{relativeTo: this.route})
}

irCrearCargo(){
  this.router.navigate(["nuevo"],{relativeTo: this.route})
}

}
