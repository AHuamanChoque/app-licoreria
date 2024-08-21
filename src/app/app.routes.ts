import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductoListaComponent } from './dashboard/producto/producto-lista/producto-lista.component';
import { CategoriaListaComponent } from './dashboard/categoria/categoria-lista/categoria-lista.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { CargoListaComponent } from './dashboard/cargo/cargo-lista/cargo-lista.component';
import { ColaboradorListaComponent } from './dashboard/colaborador/colaborador-lista/colaborador-lista.component';
import { ProveedorListaComponent } from './dashboard/proveedor/proveedor-lista/proveedor-lista.component';
import { TipoproveedorListaComponent } from './dashboard/tipoproveedor/tipoproveedor-lista/tipoproveedor-lista.component';
import { ClienteListaComponent } from './dashboard/cliente/cliente-lista/cliente-lista.component';
import { authGuard } from './auth.guard';
import { CategoriaDetalleComponent } from './dashboard/categoria/categoria-detalle/categoria-detalle.component';
import { CargoDetalleComponent } from './dashboard/cargo/cargo-detalle/cargo-detalle.component';
import { ProveedorDetalleComponent } from './dashboard/proveedor/proveedor-detalle/proveedor-detalle.component';
import { ColaboradorDetalleComponent } from './dashboard/colaborador/colaborador-detalle/colaborador-detalle.component';
import { ClienteDetalleComponent } from './dashboard/cliente/cliente-detalle/cliente-detalle.component';
import { ProductoDetalleComponent } from './dashboard/producto/producto-detalle/producto-detalle.component';
import { TipoproveedorDetalleComponent } from './dashboard/tipoproveedor/tipoproveedor-detalle/tipoproveedor-detalle.component';
import { UsuarioDetalleComponent } from './dashboard/usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioListaComponent } from './dashboard/usuario/usuario-lista/usuario-lista.component';

export const routes: Routes = [
    {path:"login",component: LoginComponent},
    {path:"dashboard",component:DashboardComponent,
        canActivate: [authGuard],
        children:[
            {path:"home", component : HomeComponent},
            {path:"producto", component : ProductoListaComponent},
            {path:"producto/:id", component : ProductoDetalleComponent},
            {path:"categoria", component : CategoriaListaComponent},
            {path:"categoria/:id", component : CategoriaDetalleComponent},
            {path:"cargo", component : CargoListaComponent},
            {path:"cargo/:id", component : CargoDetalleComponent},
            {path:"colaborador", component : ColaboradorListaComponent},
            {path:"colaborador/:id", component : ColaboradorDetalleComponent},
            {path:"proveedor", component : ProveedorListaComponent},
            {path:"proveedor/:id", component : ProveedorDetalleComponent},
            {path:"tipoproveedor", component : TipoproveedorListaComponent},
            {path:"tipoproveedor/:id", component : TipoproveedorDetalleComponent},
            {path:"cliente", component : ClienteListaComponent},
            {path:"cliente/:id", component : ClienteDetalleComponent},
            {path:"usuario", component : UsuarioListaComponent},
            {path:"usuario/:id", component : UsuarioDetalleComponent}
            
        ]},
        {path:"",redirectTo:"login", pathMatch:"full"},
        {path:"**", component : PageNotFoundComponent}
];
