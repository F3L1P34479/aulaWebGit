import { Component } from '@angular/core';

@Component({
  selector: 'imc-component',
  templateUrl: 'imc.component.html',
  styleUrls: ['imc.component.css']
})

export class IMCComponent{
  peso: number;
  altura: number;
  resultado: number;

  calcular():number{
    this.resultado = (Number(this.peso))/((Number(this.altura))*(Number(this.altura)));
    return this.resultado;
  }
}
