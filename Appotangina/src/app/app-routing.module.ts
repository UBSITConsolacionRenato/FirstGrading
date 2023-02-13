import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Activity3a/header/header.component';
import { MainComponent } from './Activity3a/main/main.component';
import { FooterComponent } from './Activity3a/footer/footer.component';
import { RegistrationComponent } from './Activity3a/registration/registration.component';
import { AboutComponent } from './Activity3a/about/about.component';
import { LoginComponent } from './Activity3a/login/login.component';
import { GalleryComponent } from './Components/gallery/gallery.component';

const routes: Routes = [
  {path: 'Header', component: HeaderComponent},
  {path: 'Main', component: MainComponent},
  {path: 'Footer', component: FooterComponent},
  {path: 'Registration', component: RegistrationComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Gallery', component: GalleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
