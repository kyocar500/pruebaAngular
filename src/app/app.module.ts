import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MenubarModule,MenuItem,ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './topMenuComponent/top-menu.component';
import { LeftSidebarComponent } from './leftSidebarComponent/left-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
