import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuarios';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  usuario = '';
  password = '';

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
    
  ){
    console.log("login cargado");
  }

  login() {
    if (!this.usuario || !this.password) {
      alert('Complete ambos campos');
      return;
    }

    this.usuarioService.login(this.usuario, this.password).subscribe({
      next: (respuesta: any) => {
        if (respuesta.success) {

          localStorage.setItem('usuario', JSON.stringify(respuesta.userData));
          this.router.navigate(['/inicio']);
        } else {
          alert(respuesta.message || 'Credenciales incorrectas');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error de conexión con el servidor');
      }
    });
  }
  clear() {
    this.usuario = '';
    this.password = '';
  }

}