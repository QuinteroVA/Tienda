import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-formproductos',
  templateUrl: './formproductos.component.html',
  styleUrls: ['./formproductos.component.css']
})
export class FormproductosComponent {

  constructor(private servicio: ProductosService, private ruta: ActivatedRoute, private route: Router) { }

  id:any;
  tipo:any;
  nombre:any;
  descripcion:any;
  precio:any;
  imagen:any;

  guardarProducto(producto: any) {
    this.servicio.postProductos(producto.value).subscribe()
    this.route.navigate([`producto`])
  }
}