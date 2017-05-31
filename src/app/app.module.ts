//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//PrimeNg imports
import {MenubarModule,MenuItem,ButtonModule,InputTextModule} from 'primeng/primeng';

//Custom component imports
import { AppComponent } from './app.component';
import { TopMenuComponent } from './topMenuComponent/top-menu.component';
import { LeftSidebarComponent } from './leftSidebarComponent/left-sidebar.component';
import { HomeComponent } from './homeComponent/home.component';
import { PageNotFoundComponent } from './pageNotFoundComponent/page-not-found.component';
import { UsuariosComponent } from './usuariosComponent/usuarios.component';

//Custom modules imports
import { RutasModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LeftSidebarComponent,
    HomeComponent,
    PageNotFoundComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    ButtonModule,
    RutasModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
