import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    QuemSomosComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
