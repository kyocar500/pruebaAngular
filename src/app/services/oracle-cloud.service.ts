import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { Persona } from '../entidades/persona.entity';
import { ConstantesService } from './constantes.service';

@Injectable()
export class OracleCloudService {
    url:string;
    constructor(private http: Http, private constantes: ConstantesService) { }

    //POST Method
    POST_Request(persona: Persona) {
        console.log("POST REQUEST------->>");
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(this.constantes.usuario + ":" + this.constantes.password));
        headers.append('Content-type', 'application/json');
        headers.append("Accept", "application/json");

        let options = new RequestOptions({ headers: headers });
        this.url = this.constantes.urlPrueba;
        console.log(this.url);


        return this.http.post(this.url, persona, options)
            .map(res => res.json());
    }


}