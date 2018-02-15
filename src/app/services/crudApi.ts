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
export class CrudApi {
    private apiUrl : string;

    constructor(private http : Http, private converter : ModelsConvertingService) {
        this.apiUrl = environment.apiUrl;
    }
    
    create(record : TableRecord) : Observable<Response> {
        var json = this.converter.convertToJson(record);
        const url: string = `${this.apiUrl}/crud?table=${record.tableName}`;
        console.log(url);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, json, options);
    }

    read(tableName: string) : Observable<TableRecord[]> {
        const url: string = `${this.apiUrl}/crud?table=${tableName}`;
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

    update(record : TableRecord) : Observable<Response> {
        var json = this.converter.convertToJson(record);
        var recordName = record.properties.filter(p => p.key == "name")[0].value;
        const url: string = `${this.apiUrl}/crud?table=${record.tableName}&name=${recordName}`;
        console.log(url);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, json, options);
    }

    delete(table : string, recordName : string) : Observable<Response> {
        const url: string = `${this.apiUrl}/crud?table=${table}&name=${recordName}`;
        console.log(url);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(url, options);
    }

}