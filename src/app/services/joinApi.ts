import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { TableRecord } from "../models/tableRecord";
import { environment } from "../../environments/environment";
import { TableProperty } from "../models/tableProperty";
import { ModelsConvertingService } from "./modelsConvertingService";

@Injectable()
export class JoinApi {
    private apiUrl : string;

    constructor(private http : Http,  private converter : ModelsConvertingService) {
        this.apiUrl = environment.apiUrl;
    }

    join(table1 : string, column1 : string, table2 : string, column2 : string, joinType : string) : Observable<TableRecord[]> {
        const url: string = `${this.apiUrl}/join?table1=${table1}&column1=${column1}&table2=${table2}&column2=${column2}&joinType=${joinType}`;
        console.log(url);
        return this.http.get(url).map(resp => {
            console.log(resp.status);
            console.log(resp.statusText);
            console.log(resp.json());
            return this.converter.convertFromObjectArray(resp.json());})
        .catch((error:any) => {
            console.log(error);
            return Observable.throw(error);});
    }
}