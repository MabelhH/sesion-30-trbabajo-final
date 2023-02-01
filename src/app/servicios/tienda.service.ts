import { Injectable } from '@angular/core';
import{Auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { tienda } from '../interfaces/interface';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private auth:Auth, private firestore:Firestore ) { }

  registrouser({email ,password}:any){
  return createUserWithEmailAndPassword(this.auth,email,password);
  }
  
  loginuser({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
   logout(){
     return signOut(this.auth);
   }
   addProduct(tienda:tienda){
    const farmaciaRef = collection(this.firestore, 'tienda02');
  return addDoc(farmaciaRef, tienda) 
     
  }
}
