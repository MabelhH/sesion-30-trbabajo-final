import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment'; 
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CoponentesModule } from './componentes/componentes.module';
import { PaginasModule } from './paginas/paginas.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './navbart/menu/menu.component';
import { NavbartModule } from './navbart/navbart.module';
import { MostrarComponent } from './componetes/mostrar/mostrar.component';

var config = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  projectId: environment.firebase.projectId,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messagingSenderId,
}

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    CoponentesModule,
    PaginasModule,
    NavbartModule,
    RouterModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
