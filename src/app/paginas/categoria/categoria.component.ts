import { Component } from '@angular/core';
import { Categoria } from '../../entidades/categoria';

@Component({
  selector:'categoria-component',
  templateUrl:'categoria.component.html',
  styleUrls:['categoria.component.css']
})

export class CategoriaComponent{
  listaCategoria = new Array<Categoria>();
  categoria : Categoria = new Categoria();

  adicionar() : void {
    this.listaCategoria.push(this.categoria);
    this.categoria = new Categoria();
  }
  alterar(i:number) : void {
    this.categoria = this.listaCategoria[i];
    this.listaCategoria.splice(i,1);

  }
  excluir(i:number) : void {
    this.listaCategoria.splice(i,1);
  }
}
