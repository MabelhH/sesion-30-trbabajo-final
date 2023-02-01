import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistrarprodComponent } from './componentes/registrarprod/registrarprod.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MostrarComponent } from './componetes/mostrar/mostrar.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'inicio',component:InicioComponent},
  {path:'productos',component:ProductosComponent},
  {path:'mostrar/:id',component:MostrarComponent},
  {path:'registrarprod',component:RegistrarprodComponent},
  {path:'',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
