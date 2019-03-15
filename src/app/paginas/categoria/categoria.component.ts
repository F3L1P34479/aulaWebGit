import { Component } from '@angular/core';
import { categoria } from '../../entidades/categoria';
@Component({
  selector:'categoria-component',
  templateUrl:'categoria.component.html',
  styleUrls:['categoria.component.css']
})

export class CategoriaComponent{
  listaCategoria = new Array<Categoria>();
  categoria : Categoria = new Categoria();
}
