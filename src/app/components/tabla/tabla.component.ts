import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  
  constructor(private servicio: ProductosService){}

  productos:any

  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{
      this.productos=p;
    })
  }

  borrar(id:any){
    this.servicio.deleteProductos(id).subscribe()
  }
}

