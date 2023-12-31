import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './pages/menu/menu.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ToolbarModule } from './layout/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
