import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesproductosComponent } from './pages/detallesproductos/detallesproductos.component';
import { FormproductosComponent } from './components/formproductos/formproductos.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';
import { InvitadoComponent } from './components/invitado/invitado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'producto', component: ProductoComponent, canActivate:[loginGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'formproductos', component: FormproductosComponent, canActivate:[loginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'invitado', component: InvitadoComponent, canActivate:[loginGuard]  },
  { path: 'productos/:idproductos', component: DetallesproductosComponent },

  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "**", component: Error404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
