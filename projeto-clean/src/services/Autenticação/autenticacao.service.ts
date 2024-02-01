import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin (usuario: Usuario) {
    if (usuario.email === 'usuario@gmail.com' &&
    usuario.senha === '123456') {

      this.usuarioAutenticado = true;
      this.router.navigate(['/menu']);

    } else {
      this.usuarioAutenticado = false;
    }


  }





}
