import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  private API_PERSONAL = "http://localhost:3000/productos"

  //LEER PRODUCTOS
  getProductos(): Observable<any> {
    return (this.http.get(this.API_PERSONAL))
  }

  getProducto(id: any): Observable<any> {
    return this.http.get(`${this.API_PERSONAL}/${id}`)
  }

  //GUARDAR
  postProductos(producto: any): Observable<any> {
    return this.http.post(this.API_PERSONAL, producto)
  }

  //EDITAR
  putProductos(producto: any): Observable<any> {
    return this.http.put(`${this.API_PERSONAL}/${producto.id}`, producto)
  }
  //ELIMINAR
  deleteProductos(id: any): Observable<any> {
    return this.http.delete(`${this.API_PERSONAL}/${id}`)
  }




}
