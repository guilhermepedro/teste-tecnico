import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './pages/menu/menu.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ToolbarModule } from './layout/toolbar/toolbar.module';
import { AdicionarEditarComponent } from './modais/adicionar-editar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxMaskModule } from 'ngx-mask';
import { AdicionarEditarMedicoComponent } from './modais/adicionar-editar-medico/adicionar-editar-medico.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    AdicionarEditarComponent,
    AdicionarEditarMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToolbarModule,
    HttpClientModule,
    MatTabsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true // ao salvar, vai manter a mascara
    }),
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
