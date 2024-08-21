import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Clientes } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.css'
})
export class ClienteListaComponent {
  displayedColumns: string[] = ['codclientes', 'dnicli', 'nombrecli', 'apellidocli','celularcli','correocli','edadcli','sexocli','direccioncli'];
  clientes: Clientes[] = []


  constructor(private clientesService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }


  ngOnInit(): void {
    this.clientesService.ObtenerTodosClientes().subscribe((data) =>{
      //console.log(data)
      this.clientes= data
    })
  }
  
  irDetalleCliente(id:string){
    this.router.navigate([id],{relativeTo: this.route})
  }
  
  irCrearCliente(){
    this.router.navigate(["nuevo"],{relativeTo: this.route})
  }



}
