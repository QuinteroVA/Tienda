import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  //visualizar=true
  //cambiar(){
  //  this.visualizar=!this.visualizar
  //}

  id:string=""
  password:string=""

  guardarJSON(){
    const temp={
      id: this.id,
      pass: this.password
    }
    this.limpiar()
    
    return temp;
  }

  //LIMPIAR INPUTS
  limpiar(){
    this.id=""
    this.password=""
  }

}
