export class Persona{
    
    nombre:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    sueldo:number;
    puesto:string;

    constructor(nombre:string , apellidoPaterno:string , apellidoMaterno:string,sueldo:number,puesto:string){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.sueldo = sueldo;
        this.puesto = puesto;
    }


}