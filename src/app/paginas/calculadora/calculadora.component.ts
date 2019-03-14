import { Component } from "@angular/core";

@Component({
  selector: 'calculadora-component',
  templateUrl: 'calculadora.component.html',
  styleUrls: ['calculadora.component.css']
})

export class CalculadoraComponent{
  num1: number;
  num2: number;
  resposta: number;

  somar():number{
    this.resposta= (Number(this.num1) + Number(this.num2));
    return this.resposta;
  }
  subtrair():number{
    this.resposta= (Number(this.num1) - Number(this.num2));
    return this.resposta;
  }
  multiplicar():number{
    this.resposta= (Number(this.num1) * Number(this.num2));
    return this.resposta;
  }
  dividir():number{
    this.resposta= (Number(this.num1) / Number(this.num2));
    return this.resposta;
  }
}
