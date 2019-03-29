import { Estado } from '../entidades/estado';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoEstado{
  estado: Estado = new Estado();
  listaEstado = new Array<Estado>();

  adicionar(estado: Estado) : void {
    this.listaEstado.push(estado);
  }
  alterar(i:number) : void {
    this.estado = this.listaEstado[i];
    this.listaEstado.splice(i,1);
  }
  excluir(i:number) : void {
    this.listaEstado.splice(i,1);
  }

  pegarEstado(i:number) : Estado{
    return this.listaEstado[i];
  }

}
