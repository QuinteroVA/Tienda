import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToProductos(): void {
    const rol = localStorage.getItem('user');
    if (rol === 'admin') {
      this.router.navigate(['/producto']);
    } else if (rol === 'guest') {
      this.router.navigate(['/invitado']);
    } else {
      // Si no hay un usuario autenticado, redirige al componente de Login
      this.router.navigate(['/login']);
    }
  }
}

