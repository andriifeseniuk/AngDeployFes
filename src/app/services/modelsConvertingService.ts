import { Injectable } from "@angular/core";

import { TableRecord } from "../models/tableRecord";
import { TableProperty } from "../models/tableProperty";

@Injectable()
export class ModelsConvertingService {
    convertToJson(record : TableRecord) : string {
        let jsonObject : any = {};
        for(let property of record.properties) {
          if(property.key && property.key != "" && property.value) {
            jsonObject[property.key] = property.value;
          }
        }
        let json = JSON.stringify(jsonObject); 
        console.log(json); 
        return json;  
    }

    convertFromObjectArray(objArray : any[]) : TableRecord[]
    {
        let records : TableRecord[] = [];
        for(let jsonObject of objArray) {
            let record  = new TableRecord();
            for(let objProperty in jsonObject) {
                if(jsonObject.hasOwnProperty(objProperty)) {
                    let tableProperty = new TableProperty(objProperty, jsonObject[objProperty])
                    record.properties.push(tableProperty);
                }
            }
            records.push(record)
        }
        return records;
    }

    // private convertObjectFromJson(json : string) : TableRecord {
    //     let jsonObject = JSON.parse(json);
    //     let result = new TableRecord();
    //     for(let property in jsonObject) {
    //         if(jsonObject.hasOwnProperty(property)) {
    //             let tableProperty = new TableProperty(property, jsonObject[property]);
    //             result.properties.push(tableProperty);
    //         }
    //     }
    //     return result;
    // }

    // private convertArrayFromJson(json : string) : TableRecord[] {
    //     let result : TableRecord[] = [];
    //     let jsonArray = JSON.parse(json);
    //     for(let jsonObject of jsonArray)
    //     {
    //         var record = this.convertObjectFromJson(jsonObject);
    //         result.push(record);
    //     }
    //     return result;
    // }
}