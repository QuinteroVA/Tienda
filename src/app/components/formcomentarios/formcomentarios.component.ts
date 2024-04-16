import { Component } from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-formcomentarios',
  templateUrl: './formcomentarios.component.html',
  styleUrls: ['./formcomentarios.component.css']
})
export class FormcomentariosComponent {

  constructor(private servicio: ComentariosService) { }

  id:any
  nombre:any;
  apellido:any;
  correo:any;
  telefono:any;
  mensaje:any;

  guardarComentario(comentario: any) {
    this.servicio.postComentarios(comentario.value).subscribe()
  }
}
