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



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    AdicionarEditarComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
