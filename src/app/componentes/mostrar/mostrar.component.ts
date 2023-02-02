import { Component ,OnInit ,Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TiendaService } from 'src/app/servicios/tienda.service';
import { tienda } from 'src/app/interfaces/interface';
import { CarritoComponent } from '../carrito/carrito.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
 cantida: string;
  carrito: string;
}
@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent  implements OnInit{
 
  lista:any=[];
  lista02:any=[];
  tienda!:tienda[];

 constructor(private datos:TiendaService,public dialog: MatDialog, private route :ActivatedRoute,private location:Location  ){}
  
  
ngOnInit(): void {
  
}
 


goback():void{
  this.location.back();
 }
 


}



