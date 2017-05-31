import { Component } from '@angular/core';
import { Persona } from '../entidades/persona.entity';
import { OracleCloudService } from '../services/oracle-cloud.service';
import { ConstantesService } from '../services/constantes.service';


@Component({
    selector: 'usuarios',
    templateUrl: 'usuarios.component.html',
    styleUrls: ['usuarios.component.css'],
    providers : [OracleCloudService,ConstantesService]
})

export class UsuariosComponent {
    title = "Operaciones con usuarios";
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    sueldo: number;
    puesto: string;
    errorMessage: string;
    usuarios: Persona[];

    constructor(private oracleClient: OracleCloudService) { }



    //Método para mandar a ejecutar el ws que agregarara una nueva pelicula a la BD
    sendRequest() {
        console.log("SENDING POST REQUEST...");

        //Se crea el objeto a enviar 
        let EntityToSend = new Persona(this.nombre, this.apellidoPaterno, this.apellidoMaterno, this.sueldo,this.puesto);

        // Llamamos al mÃ©todo del servicio
        this.oracleClient.POST_Request(EntityToSend)
            .subscribe(
            result => {
                this.usuarios = result;
                console.log(this.usuarios);
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage !== null) {
                    alert("Error en la petición POST: " + this.errorMessage);
                }
            }
            );
    }
}