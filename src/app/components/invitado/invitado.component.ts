import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.css']
})
export class InvitadoComponent {

  constructor(private servicio: ProductosService){}

  productos:any

  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{
      this.productos=p;
    })
  }
}
