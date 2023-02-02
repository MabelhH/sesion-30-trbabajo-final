import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TiendaService } from 'src/app/servicios/tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarprod',
  templateUrl: './registrarprod.component.html',
  styleUrls: ['./registrarprod.component.css']
})
export class RegistrarprodComponent implements OnInit{
  formRegistrar!:FormGroup;

   constructor(private tiendaservice:TiendaService,private router:Router){
    this.formRegistrar = new FormGroup({
      item:new FormControl(),
      id:new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),
      costo: new FormControl(),
      oferta: new FormControl(),
      imagen: new FormControl(),
      total:new FormControl(),
      
     })
   }
  
    ngOnInit(): void {
      
     }
       registrar(){
        this.router.navigate(['/inicio']) 
        console.log(this.formRegistrar.value)
        const response = this.tiendaservice.addProduct(this.formRegistrar.value)
        console.log(response)
   }
   

    
}
