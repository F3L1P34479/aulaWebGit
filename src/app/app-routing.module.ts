import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { IMCComponent } from './paginas/imc/imc.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { CadastroPessoaComponent } from './paginas/cadastroPessoa/cadastroPessoa.component';
import { PositivoNegativoComponent } from './paginas/positivoNegativo/positivoNegativo.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'calculadora',component:CalculadoraComponent},
{path:'pessoa',component:CadastroPessoaComponent},
{path:'imc',component:IMCComponent},
{path:'positivo',component:PositivoNegativoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
