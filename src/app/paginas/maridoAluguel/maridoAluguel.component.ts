import { Component } from "@angular/core";
import { MaridoAluguel } from "../../entidades/maridoAluguel";

@Component({
  selector:'maridoAluguel-component',
  templateUrl:'maridoAluguel.component.html',
  styleUrls:['maridoAluguel.component.css']
})

export class MaridoAluguelComponent{
  listaMarido = new Array<MaridoAluguel>();
  marido : MaridoAluguel = new MaridoAluguel();

  adicionar() : void {
    this.listaMarido.push(this.marido);
    this.marido = new MaridoAluguel();
  }
  alterar(i:number) : void {
    this.marido = this.listaMarido[i];
    this.listaMarido.splice(i,1);

  }
  excluir(i:number) : void {
    this.listaMarido.splice(i,1);
  }
}
