import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';

export interface PeriodicElement {
  codclientes: number;
  dnicli: string;
  nombrecli: string;
  apellidocli: string;
  celular: string;
  correo:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codclientes: 1, dnicli: '47556895', nombrecli: 'Christian', apellidocli: 'Valencia Salcedo',celular: '951238548', correo:'crisac59@gmail.com'},
  {codclientes: 2, dnicli: '53554589', nombrecli: 'Freddy', apellidocli: 'Ortiz Rodriguez',celular: '951219548', correo:'fro1520@gmail.com'},
  {codclientes: 3, dnicli: '87961208', nombrecli: 'Manuel', apellidocli: 'Jimenez Gonsalez',celular: '924786016', correo:'jimenez780@gmail.com'},
  {codclientes: 4, dnicli: '08759630', nombrecli: 'Maria', apellidocli: 'Ramirez Aspe',celular: '918475963', correo:'aspe480@gmail.com'},
  {codclientes: 5, dnicli: '08765432', nombrecli: 'Alejandro', apellidocli: 'García Pérez',celular: '987654321', correo:'jack.green789@gmail.com'},
  {codclientes: 6, dnicli: '45678901', nombrecli: 'Miguel', apellidocli: 'Rodríguez González',celular: '912345678', correo:'chris.taylor987@gmail.com'},
  {codclientes: 7, dnicli: '23456789', nombrecli: 'Alfredo', apellidocli: 'López Martínez',celular: '955678901', correo:'dylan.thomas456@gmail.com'},
  {codclientes: 8, dnicli: '34567890', nombrecli: 'Rosa', apellidocli: 'Pérez Sánchez',celular: '923456789', correo:'max.wilson321@gmail.com'},
  {codclientes: 9, dnicli: '56789012', nombrecli: 'Abigail', apellidocli: 'Flores Gómez',celular: '977890123', correo:'hacker.neo@gmail.com'},
  {codclientes: 10, dnicli: '78901234', nombrecli: 'Yadhira', apellidocli: 'Díaz Vásquez',celular: '966789012', correo:'blackbeard@example.com'},
  {codclientes: 11, dnicli: '89012345', nombrecli: 'Juan', apellidocli: 'Castro Rivera',celular: '944567890', correo:'gamer.masterchief@gmail.com'},
  {codclientes: 12, dnicli: '67890123', nombrecli: 'Manolo', apellidocli: 'Fernández Martín',celular: '933456789', correo:'wizard.hermione@gmail.com'},
  {codclientes: 13, dnicli: '98765432', nombrecli: 'Samantha', apellidocli: 'Mendoza García',celular: '955432109', correo:'dumbledore@example.com'},
  {codclientes: 14, dnicli: '54321098', nombrecli: 'Luis', apellidocli: 'Gutiérrez Pérez',celular: '966543210', correo:'jason.clark123@gmail.com'},
  {codclientes: 15, dnicli: '54321098', nombrecli: 'Antonella', apellidocli: 'Navarro López',celular: '912109876', correo:'katana@gmail.com'},

];


@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.css'
})
export class ClienteListaComponent {
  displayedColumns: string[] = ['codclientes','dnicli', 'nombrecli', 'apellidocli', 'celular','correo'];
  dataSource = ELEMENT_DATA;
}
