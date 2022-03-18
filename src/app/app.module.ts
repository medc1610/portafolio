import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InicioComponent } from './inicio/inicio.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenurComponent } from './shared/menur/menur.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreMiComponent,
    ProyectosComponent,
    InicioComponent,
    HabilidadesComponent,
    ContactoComponent,
    MenurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
