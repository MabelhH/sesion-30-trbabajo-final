import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!:FormGroup;

  constructor(
    private tiendaService:TiendaService, 
    private roter:Router
    )
    {
      this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
      }) 
    }
 
  ngOnInit(): void {
    
  }
  onSubmit(){
    //console.log(this.formLogin.value)
    this.tiendaService.loginuser(this.formLogin.value)
    .then(
      response =>{
      console.log(response)
      this.roter.navigate(['/inicio']);

      }
    )
    .catch(error=> console.log(error)
    )
  }
  
}
