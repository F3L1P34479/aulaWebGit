import { Component, OnInit } from '@angular/core';
import { Estado } from '../../entidades/estado';
import { ServicoEstado } from '../../servico/servico.estado';
import { Observable } from 'rxjs';


@Component({
  selector:'estado-component',
  templateUrl:'estado.component.html',
  styleUrls:['estado.component.css']
})

export class EstadoComponent implements OnInit{

  estados$ : Observable<Estado[]>;

  //servico : ServicoEstado = new ServicoEstado();
  //listaEstado = new Array<Estado>();
  estado : Estado = new Estado();
  estado2 : Estado = new Estado();
  salvar : boolean = true;

  constructor(private servico : ServicoEstado){

  }

  ngOnInit(){
    this.atualizar();
  }

  atualizar(){
    this.estados$ = this.servico.listar();
  }

  adicionar() : void {
    if(this.salvar){
      this.servico.adicionar(this.estado).subscribe(
        () =>{
          this.atualizar();
        }
      );

    }
    else{
      this.servico.alterar(this.estado).subscribe(
        () =>{
          this.atualizar();
        }
      );
    }
    
    this.estado = new Estado();
    
  }

  alterar(estado: Estado) : void {
    this.estado = estado;
    this.salvar = false;
  }

  excluir(id:number) : void {
    this.servico.excluir(id).subscribe(
      () =>{
        this.atualizar();
      }
    );
  }

  pegarEstado(i:number) : void{
    this.estado2 = this.servico.pegarEstado(i);
  }
}
