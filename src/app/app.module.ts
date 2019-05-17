import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { CadastroPessoaComponent } from './paginas/cadastroPessoa/cadastroPessoa.component';
import { IMCComponent } from './paginas/imc/imc.component';
import { PositivoNegativoComponent } from './paginas/positivoNegativo/positivoNegativo.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { EstadoComponent } from './paginas/estado/estado.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { ServicoEstado } from './servico/servico.estado';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CalculadoraComponent,
    IMCComponent, PositivoNegativoComponent, CadastroPessoaComponent,
    ArraysComponent, EstadoComponent, CategoriaComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [ServicoEstado],
  bootstrap: [AppComponent]
})
export class AppModule { }
