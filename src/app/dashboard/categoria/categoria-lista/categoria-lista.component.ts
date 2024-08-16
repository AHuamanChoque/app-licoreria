import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  precio:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', precio:'25'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', precio:'25'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', precio:'25'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', precio:'25'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', precio:'25'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', precio:'25'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', precio:'25'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', precio:'25'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', precio:'25'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', precio:'25'},

];

@Component({
  selector: 'app-categoria-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.css'
})
export class CategoriaListaComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','precio'];
  dataSource = ELEMENT_DATA;
}
