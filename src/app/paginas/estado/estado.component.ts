import { Component } from '@angular/core';
import { Estado } from '../../entidades/estado';

@Component({
  selector:'estado-component',
  templateUrl:'estado.component.html',
  styleUrls:['estado.component.css']
})

export class EstadoComponent{
  listaEstado = new Array<Estado>();
  estado : Estado = new Estado();

  adicionar() : void {
    this.listaEstado.push(this.estado);
    this.estado = new Estado();
  }
  alterar(i:number) : void {
    this.estado = this.listaEstado[i];
    this.listaEstado.splice(i,1);

  }
  excluir(i:number) : void {
    this.listaEstado.splice(i,1);
  }

}
