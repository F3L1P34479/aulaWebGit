import { Estado } from '../entidades/estado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable()
export class ServicoEstado{
  private readonly URL = "http://localhost:8080/ws/estado/";

  estado: Estado = new Estado();
  listaEstado = new Array<Estado>();

  constructor(private http: HttpClient){
  }

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

  buscar(){
    return this.http.get<Estado[]>(this.URL).pipe(take(1));
  }

}
