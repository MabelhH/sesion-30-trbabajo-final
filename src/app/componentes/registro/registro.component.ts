import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { TiendaService } from 'src/app/servicios/tienda.service'; 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public forRegistro!: FormGroup;
 

  constructor(
    private tiendaService:TiendaService, 
    private roter:Router){
      this.forRegistro=new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      
      })

  }

  ngOnInit(): void {  
  
}


onSubmit(){
  //console.log(this.forRegistro.value)
  this.tiendaService.registrouser(this.forRegistro.value)
   .then( response => {
   console.log(response)
     this.roter.navigate(['/login']);
   })
   .catch( erorr => console.log(erorr));

}
}
