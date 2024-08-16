import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';


export interface PeriodicElement {
  codCargo: number;
  nombreCargo: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codCargo: 1, nombreCargo: 'Administrador'},
  {codCargo: 2, nombreCargo: 'Operario'},
  {codCargo: 3, nombreCargo: 'Vendedor'},
  {codCargo: 4, nombreCargo: 'Atencion al Cliente'},
  {codCargo: 5, nombreCargo: 'Gerente de calidad'},
  {codCargo: 6, nombreCargo: 'Cajero'},
  {codCargo: 7, nombreCargo: 'Asesor de productos'},
  {codCargo: 8, nombreCargo: 'Reponedor de inventario'},
  {codCargo: 9, nombreCargo: 'Delivery'},

];

@Component({
  selector: 'app-cargo-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cargo-lista.component.html',
  styleUrl: './cargo-lista.component.css'
})
export class CargoListaComponent {
  displayedColumns: string[] = ['codCargo','nombreCargo'];
  dataSource = ELEMENT_DATA;
}
