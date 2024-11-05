import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },          // Rota para a página inicial
  { path: 'contato', component: ContatoComponent }, // Rota para a página de contato
  { path: 'quem-somos', component: QuemSomosComponent }, // Rota para a página quem somos
  { path: 'produtos', component: ProdutosComponent },    // Rota para a página produtos
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona para a página inicial em caso de rota inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
