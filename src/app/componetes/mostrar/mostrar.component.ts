import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit{
  input:any=[]
  lista:any=[];
  lista02:any=[];
  

  
  constructor(private location:Location, private route:ActivatedRoute){
  
}
ngOnInit(): void {
 let id = this.route.snapshot.paramMap.get('id');
}
goback():void{
  this.location.back();
 }

}
