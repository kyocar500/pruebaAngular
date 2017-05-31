import { Component } from '@angular/core';
import { TopMenuComponent } from './topMenuComponent/top-menu.component';
import { LeftSidebarComponent } from './leftSidebarComponent/left-sidebar.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
