import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{
  nome: string = "Felipe";
  valor: string = "";
  num1: number;
  num2: number;
  resposta: string;

//  soma():number{
    //this.resposta= (Number(this.num1) + Number(this.num2));
    //return this.resposta;
//  }
  apresentaNome(){
    alert('Boa noite ' + this.valor);
  }
  clique(){
    alert('boa noite');
  }

}
