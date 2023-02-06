import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponentComponent } from './components/new-component/new-component.component';

import { LayoutComponent } from './activity2/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponentComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
