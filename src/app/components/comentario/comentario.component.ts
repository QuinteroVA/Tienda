import { Component } from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  
  constructor(private servicios: ComentariosService){}

  comentarios:any

  ngOnInit(){
    this.servicios.getComentarios().subscribe()
  }
}
