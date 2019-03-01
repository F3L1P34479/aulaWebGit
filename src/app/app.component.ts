import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{
  nome: string = "Felipe";
  valor: string = "";
  num1: string = "";
  num2: string = "";

  soma():Number{
    this.total= Number(this.num1) + Number(this.num2);
    return this.total;
  }
  apresentaNome(){
    alert('Boa noite ' + this.valor);
  }
  clique(){
    alert('boa noite');
  }

}
