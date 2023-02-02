import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarprodComponent } from './registrarprod/registrarprod.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { CarritoComponent } from './carrito/carrito.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    ProductosComponent,
    RegistrarprodComponent,
    MostrarComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,

  ],
  exports:[
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    ProductosComponent,
    RegistrarprodComponent,
    MostrarComponent,
    CarritoComponent
  ]

  
})
export class CoponentesModule { }
