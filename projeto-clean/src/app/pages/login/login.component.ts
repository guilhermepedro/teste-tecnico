import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AutenticacaoService } from 'src/services/Autenticação/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService) { }
  
  fazerLogin() {
    this.autenticacaoService.fazerLogin(this.usuario);
    
  }

}
