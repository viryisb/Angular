import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EntradaComponent } from './componente/entrada/entrada.component';
import { AtributoComponent } from './componente/atributo/atributo.component';
import { EstructuraComponent } from './componente/estructura/estructura.component';
import { FormularioComponent } from './componente/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    AtributoComponent,
    EstructuraComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
