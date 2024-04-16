import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { Error404Component } from './pages/error404/error404.component';
import { VideoComponent } from './components/video/video.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { DetallesproductosComponent } from './pages/detallesproductos/detallesproductos.component';
import { FormproductosComponent } from './components/formproductos/formproductos.component';
import { FormcomentariosComponent } from './components/formcomentarios/formcomentarios.component';
import { FormloginComponent } from './components/formlogin/formlogin.component';
import { LoginComponent } from './pages/login/login.component';
import { InvitadoComponent } from './components/invitado/invitado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProductoComponent,
    ContactoComponent,
    TablaComponent,
    MapaComponent,
    Error404Component,
    VideoComponent,
    ComentarioComponent,
    DetallesproductosComponent,
    FormproductosComponent,
    FormcomentariosComponent,
    FormloginComponent,
    LoginComponent,
    InvitadoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
