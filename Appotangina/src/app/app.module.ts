import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponentComponent } from './components/new-component/new-component.component';

import { LayoutComponent } from './activity2/layout/layout.component';
import { HeaderComponent } from './Activity3a/header/header.component';
import { MainComponent } from './Activity3a/main/main.component';
import { FooterComponent } from './Activity3a/footer/footer.component';
import { RegistrationComponent } from './Activity3a/registration/registration.component';
import { AboutComponent } from './Activity3a/about/about.component';
import { LoginComponent } from './Activity3a/login/login.component';
import { GalleryComponent } from './Components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponentComponent,
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    RegistrationComponent,
    AboutComponent,
    LoginComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
