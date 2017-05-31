import { Component } from '@angular/core';

@Component({
    selector : 'home',
    templateUrl : 'home.component.html',
    styleUrls : ['home.component.css']
})

export class HomeComponent{
    title = 'Bienvenido a la aplicación';
    subtitle = 'Información del sitio';
    contenido = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sapiente reiciendis doloremque culpa minus quaerat maxime alias sequi inventore, accusantium et aperiam id natus aut, aliquid obcaecati deserunt quos placeat!'; 
    info1 = 'Contenido';
    info2 = 'Objetivos';
    info3 = 'Metas';
}