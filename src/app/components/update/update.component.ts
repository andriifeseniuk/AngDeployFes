import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TableProperty } from '../../models/tableProperty';
import { TableRecord } from '../../models/tableRecord';
import { CrudApi } from '../../services/crudApi';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  record : TableRecord = <TableRecord>{
    tableName : "",
    properties : [{key : "name", value : ""}, {key : "", value : ""}]
  };
  error : any;
  success : any;

  constructor(private router:Router, private crud : CrudApi) {
  }

  ngOnInit() {
  }

  addRow() {
    this.record.properties.push({ key : "", value : ""});
  }

  deleteRow(rowIndex : number)
  {
    this.record.properties.splice(rowIndex, 1);
  }

  cancel()
  {
    this.router.navigate([""]);
  }

  update() {
    console.log(this.record.tableName);
    console.log(this.record.properties);
    this.crud.update(this.record).subscribe(resp => {
       console.log(resp);
       this.success = resp;
       this.error = undefined;    
      },
      error => {
        console.log(error);
        console.log(error.json());
        this.error = error;
        this.success = undefined;
      });

  }

}
