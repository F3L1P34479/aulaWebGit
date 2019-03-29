

export class Estado{
  private nome: string;
  private sigla: string;
  private detalhes: string;

  getNome() : string{
    return this.nome;
  }

  setNome(nome:string) : void {
    this.nome = nome;
  }

  getSigla() : string{
    return this.sigla;
  }

  setSigla(sigla:string) : void {
    this.sigla = sigla;
  }

  getDetalhes() : string{
    return this.detalhes;
  }

  setDetalhes(detalhes:string) : void {
    this.detalhes = detalhes;
  }
}
