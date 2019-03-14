import { Component } from '@angular/core';


@Component({
  selector: 'positivoNegativo-component',
  templateUrl: 'positivoNegativo.component.html',
  styleUrls: ['positivoNegativo.component.css']
})

export class PositivoNegativoComponent{
  valor: number
  resposta: string;

  verificaEhPositivo():string{
    if(this.valor>0){
      this.resposta = "O valor é positivo";
      return this.resposta;
    }
    else{
      this.resposta = "O valor é negativo";
      return this.resposta;
    }
  }
}
