import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudApi } from '../../services/crudApi';
import { TableRecord } from '../../models/tableRecord';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tableName : string;
  records : TableRecord[];
  columns : string[];
  error : any;

  constructor(private router:Router, private crud : CrudApi) {
  }

  ngOnInit() {
  }

  read(){
    this.crud.read(this.tableName).subscribe(resp => {
          console.log(resp);
          this.records = resp;
          this.columns = this.records[0].properties.map(p => p.key);
          this.error = undefined;
      },
    error => {
      console.log(error);
      console.log(error.json());
      this.error = error;});
  }

}
