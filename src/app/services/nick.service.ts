import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NickService {

  constructor(private http: HttpClient){}

    private API_NICK="http://localhost:4000/usuarios"
    //private API_NICKGUEST="http://localhost:5000/guest"
  
    getNick(): Observable<any>{
      return this.http.get(this.API_NICK);
    }

}
