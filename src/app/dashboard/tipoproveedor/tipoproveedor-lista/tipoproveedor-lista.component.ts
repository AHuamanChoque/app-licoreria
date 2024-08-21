import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { TipoProveedor } from '../tipoproveedor';
import { TipoproveedorService } from '../tipoproveedor.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-tipoproveedor-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tipoproveedor-lista.component.html',
  styleUrl: './tipoproveedor-lista.component.css'
})
export class TipoproveedorListaComponent {
  displayedColumns: string[] = ['codtipoprovee', 'descripcion'];
  tiposproveedores: TipoProveedor[] = []

  constructor(private tipoproveedorService: TipoproveedorService,
    private route: ActivatedRoute,
    private router: Router
){

}

ngOnInit(): void {
  this.tipoproveedorService.ObtenerTodosTiposProveedores().subscribe((data) =>{
    //console.log(data)
    this.tiposproveedores= data
  })
}

irDetalleTipoProveedor(id:string){
  this.router.navigate([id],{relativeTo: this.route})
}

irCrearTipoProveedor(){
  this.router.navigate(["nuevo"],{relativeTo: this.route})
}



}
