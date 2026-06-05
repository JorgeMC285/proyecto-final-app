import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class InicioComponent implements OnInit{
  usuarioData: any = null;

  constructor(private router: Router){
    console.log("Inicio cargado");
  }

  ngOnInit() {
    const stored = localStorage.getItem('usuario');
    if (stored) {
      this.usuarioData = JSON.parse(stored);
    } else {

      this.router.navigate(['/']);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
