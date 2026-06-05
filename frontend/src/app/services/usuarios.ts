import{Injectable}from'@angular/core';
import{HttpClient}from'@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class UsuarioService{
    api='http://localhost:3000/usuarios';

    private baseUrl = 'http://localhost:3000';

    constructor(private http:HttpClient){}

    obtenerUsuarios(){
        return this.http.get(this.api);
    }

    login(usuario: string, contrasena: string) {
        return this.http.post(`${this.baseUrl}/login`, { usuario, contrasena });
    }

}
