import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { JoinApi } from '../../services/joinApi';
import { TableRecord } from '../../models/tableRecord';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  joinType : string;

  constructor(private activatedRoute:ActivatedRoute, private joinApi : JoinApi) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.joinType = params['joinType']);
  }
  
  table1 : string;
  column1 : string;
  table2 : string;
  column2 : string;
  records : TableRecord[];
  columns : string[];
  error : any;

  join() {
    this.joinApi.join(this.table1, this.column1, this.table2, this.column2, this.joinType).subscribe(resp => {
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
