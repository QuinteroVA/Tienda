import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detallesproductos',
  templateUrl: './detallesproductos.component.html',
  styleUrls: ['./detallesproductos.component.css']
})
export class DetallesproductosComponent {

  id:any;
  tipo:any;
  nombre:any;
  descripcion:any;
  precio:any;
  imagen:any;

  constructor(private servicio: ProductosService, private ruta: ActivatedRoute, private route: Router){}
  ngOnInit(){
    this.ruta.params.subscribe( parametro => {
      this.servicio.getProducto(parametro['idproductos']).subscribe(p =>{
        this.id=p.id
        this.tipo=p.tipo
        this.nombre=p.nombre
        this.descripcion=p.descripcion
        this.precio=p.precio
        this.imagen=p.imagen
      })
    })
  }

  editarProducto(producto:any){
    this.servicio.putProductos(producto.value).subscribe()
    this.route.navigate([`producto`])
  }
}