import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }
private API_COMENTARIOS = "http://localhost:4000/comentarios"

//LEER COMENTARIOS
getComentarios(): Observable<any> {
  return (this.http.get(this.API_COMENTARIOS))
}


//GUARDAR COMENTARIOS
  postComentarios(comentario: any): Observable<any> {
    return this.http.post(this.API_COMENTARIOS, comentario)
  }


}

