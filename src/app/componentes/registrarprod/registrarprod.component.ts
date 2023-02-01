import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TiendaService } from 'src/app/servicios/tienda.service';
@Component({
  selector: 'app-registrarprod',
  templateUrl: './registrarprod.component.html',
  styleUrls: ['./registrarprod.component.css']
})
export class RegistrarprodComponent implements OnInit{
  formRegistrar!:FormGroup;

   constructor(private tiendaservice:TiendaService){
    this.formRegistrar = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      costo: new FormControl(),
      oferta: new FormControl(),
      imagen: new FormControl()
      
     })
   }
  
    ngOnInit(): void {
      
     }
       registrar(){
        console.log(this.formRegistrar.value)
        const response = this.tiendaservice.addProduct(this.formRegistrar.value)
        console.log(response)
   }
   agregarprod(){

   }

    
}
