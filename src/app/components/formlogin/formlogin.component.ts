import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NickService } from 'src/app/services/nick.service';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})

export class FormloginComponent {

  constructor(private router: Router, private servicios: NickService) { }

  id: string = "";
  password: string = "";
  usuarios: any

  guardarJSON() {
    const temp = {
      id: this.id,
      password: this.password
    }
    this.limpiar()

    return temp;
  }



  //LIMPIAR INPUTS
  limpiar() {
    this.id = ""
    this.password = ""
  }

  ngOnInit() {
    this.servicios.getNick().subscribe(u => {
      this.usuarios = u
    })
    localStorage.setItem("acceso", "F")
  }

  login(datos: any) {
    console.log(datos.value);
    for (let i = 0; i < this.usuarios.length; i++) {
      if (datos.value.id == this.usuarios[i].id && datos.value.password === this.usuarios[i].password) {
        console.log("usuario encontrado");
        localStorage.setItem("acceso", "T");
        localStorage.setItem("user", this.usuarios[i].user); // Guardar el rol del usuario en localst
        if (this.usuarios[i].user === "admin") {
          alert("¡Inicio de sesión exitoso como administrador!");
          this.router.navigate(["/producto"]);
        } else {
          alert("¡Inicio de sesión exitoso como invitado!");
          this.router.navigate(["/invitado"]);
          return;
        }
      }
    }
    alert("Usuario no encontrado. Verifique sus credenciales.");
  }
}