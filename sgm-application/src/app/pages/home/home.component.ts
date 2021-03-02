import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from 'app/components/message/message.component';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { Usuario } from 'app/models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MessageComponent) mensagem: MessageComponent
  public usuario : Usuario;
  constructor(private service: HomeService, private router : Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
      this.usuario = this.service.consultarUsuario();    
  }

}
