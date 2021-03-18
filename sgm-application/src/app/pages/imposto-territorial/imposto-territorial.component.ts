import { Component, OnInit } from '@angular/core';
import { Roteador } from 'app/core/data/roteador-provider';

@Component({
  selector: 'app-imposto-territorial',
  templateUrl: './imposto-territorial.component.html',
  styleUrls: ['./imposto-territorial.component.scss']
})
export class ImpostoTerritorialComponent implements OnInit {

  constructor(private router: Roteador) { }

  public inscricaoImobiliaria : String;
  public tipoImposto : String;
  ngOnInit() {
  }

  confirmarDados(){
    this.router.gotoParam("listar-imposto-territorial",{"inscricaoImobiliaria":this.inscricaoImobiliaria,"tipoImposto":this.tipoImposto});
  }

}
