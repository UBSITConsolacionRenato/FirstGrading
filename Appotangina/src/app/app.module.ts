import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { CardComponentComponent } from './components/card-component/card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponentComponent,
    CardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
