import { Component } from '@angular/core';

@Component({
  selector:'arrays-component',
  templateUrl: 'arrays.component.html',
  styleUrls:['arrays.component.css']
})

export class ArraysComponent {
  //nomes : string[]=['João','Eduardo','Gabi'];
  //nomes2 :  Array<string> = ['Felipe', 'Yuri', 'Fernando'];
  //nomes3 : Array('Herika', 'Dianna', 'Guilherme');
  nomes4 = new Array<string>();
  //nomes5 = new Array<string>(5);
  nome : string = '';

  adicionar() : void {
    this.nomes4.push(this.nome);
    this.nome = "";
  }
  alterar(i:number) : void {
    this.nome = this.nomes4[i];
    this.nomes4.splice(i,1);
  }
  excluir(i:number) : void {

    this.nomes4.splice(i,1);
  }
  /*
  constructor(){
    this.nomes4.push('Pedro');
    this.nomes4.push('Joana');
    this.nomes4.push('Pietro');
    //splice é o comando para apagar
    this.nomes4.splice(0,1);
    let initice = this.nomes4.indexOf('??');
    for(let nome of this.nomes4){
      console.log(nome);
    }
  }
  */
}
