

export class MaridoAluguel{
  private nome: string;
  private especialidade: string;
  private preco: number;

  getNome() : string{
    return this.nome;
  }

  setNome(nome:string) : void {
    this.nome = nome;
  }

  getEspecialidade() : string{
    return this.especialidade;
  }

  setEspecialidade(especialidade:string) : void {
    this.especialidade = especialidade;
  }

  getPreco() : number{
    return this.preco;
  }

  setPreco(preco:number) : void {
    this.preco = preco;
  }
}
