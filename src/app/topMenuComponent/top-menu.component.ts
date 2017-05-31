import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/primeng';


@Component({
    selector: 'top-menu',
    templateUrl : './top-menu.component.html',
    styles : ['./top-menu.component.css']
})

export class TopMenuComponent{
    brandName = 'Admin console';
}