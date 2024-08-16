import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';


export interface PeriodicElement {
  codcategoria: number;
  nombrecategoria: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codcategoria: 1, nombrecategoria: 'Cervezas'},
  {codcategoria: 2, nombrecategoria: 'Vinos'},
  {codcategoria: 3, nombrecategoria: 'Whisky'},
  {codcategoria: 4, nombrecategoria: 'Ron'},
  {codcategoria: 5, nombrecategoria: 'Ginebra'},
  {codcategoria: 6, nombrecategoria: 'Vodka'},
  {codcategoria: 7, nombrecategoria: 'Tequila'},
  {codcategoria: 8, nombrecategoria: 'Brandy'},
  {codcategoria: 9, nombrecategoria: 'Aguardiente'},
  {codcategoria: 10, nombrecategoria: 'Vermut'},
  {codcategoria: 11, nombrecategoria: 'Bitter'},
  {codcategoria: 12, nombrecategoria: 'Destilados especiales'},
  {codcategoria: 13, nombrecategoria: 'Pisco'},
  {codcategoria: 14, nombrecategoria: 'Sake'},
  {codcategoria: 15, nombrecategoria: 'Bebidas energéticas'},
  {codcategoria: 16, nombrecategoria: 'Otros'},


];

@Component({
  selector: 'app-categoria-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.css'
})
export class CategoriaListaComponent {
  displayedColumns: string[] = ['codcategoria', 'nombrecategoria'];
  dataSource = ELEMENT_DATA;
}
