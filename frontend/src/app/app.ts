import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './services/usuarios';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  usuarios: any[] = [];
  constructor(private UsuarioService: UsuarioService){}
  ngOnInit(){
    
    this.UsuarioService.obtenerUsuarios().subscribe(data => {
      console.log(data);
      this.usuarios = data as any[]; });

      console.log("App cargada");
  }
}


