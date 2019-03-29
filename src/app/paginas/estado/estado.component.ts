import { Component } from '@angular/core';
import { Estado } from '../../entidades/estado';
import { ServicoEstado } from '../../servico/servico.estado';

@Component({
  selector:'estado-component',
  templateUrl:'estado.component.html',
  styleUrls:['estado.component.css']
})

export class EstadoComponent{

  //servico : ServicoEstado = new ServicoEstado();
  listaEstado = new Array<Estado>();
  estado : Estado = new Estado();
  estado2 : Estado = new Estado();
  constructor(private servico : ServicoEstado){
    this.listaEstado = this.servico.listaEstado;
  }
  adicionar() : void {
    this.servico.adicionar(this.estado);
    this.estado = new Estado();
  }
  alterar(i:number) : void {
    this.servico.alterar(i);
  }
  excluir(i:number) : void {
    this.servico.excluir(i);
  }

  pegarEstado(i:number) : void{
    this.estado2 = this.servico.pegarEstado(i);
  }
}
