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

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CalculadoraComponent,
    IMCComponent, PositivoNegativoComponent, CadastroPessoaComponent, ArraysComponent, EstadoComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
