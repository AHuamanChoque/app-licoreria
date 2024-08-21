import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-categoria-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.css'
})
export class CategoriaListaComponent {
  displayedColumns: string[] = ['codcategoria', 'nombrecategoria'];
  categorias: Categoria[] = []

  constructor(private categoriaService: CategoriaService,
      private route: ActivatedRoute,
      private router: Router
  ){

  }

  ngOnInit(): void {
    this.categoriaService.ObtenerTodasCategorias().subscribe((data) =>{
      //console.log(data)
      this.categorias= data
    })
  }


  irDetalleCategoria(id:string){
    this.router.navigate([id],{relativeTo: this.route})
  }

  irCrearCategoria(){
    this.router.navigate(["nuevo"],{relativeTo: this.route})
  }

}
