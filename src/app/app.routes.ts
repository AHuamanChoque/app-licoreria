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

export const routes: Routes = [
    {path:"login",component: LoginComponent},
    {path:"dashboard",component:DashboardComponent,
        children:[
            {path:"home", component : HomeComponent},
            {path:"producto", component : ProductoListaComponent},
            {path:"categoria", component : CategoriaListaComponent},
            {path:"cargo", component : CargoListaComponent},
            {path:"colaborador", component : ColaboradorListaComponent},
            {path:"proveedor", component : ProveedorListaComponent},
            {path:"tipoproveedor", component : TipoproveedorListaComponent},
            {path:"cliente", component : ClienteListaComponent},
            
        ]},
        {path:"",redirectTo:"login", pathMatch:"full"},
        {path:"", component : PageNotFoundComponent}
];
