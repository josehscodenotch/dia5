import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarUsuarioComponent } from './pages/mostrar-usuario/mostrar-usuario.component';
import { InsertarUsuarioComponent } from './pages/insertar-usuario/insertar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarUsuarioComponent,
    InsertarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
