import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudApi } from '../../services/crudApi';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  table : string;
  recordName : string;
  error : any;
  success : any;

  constructor(private router:Router, private crud : CrudApi) {
  }

  ngOnInit() {
  }

  cancel()
  {
    this.router.navigate([""]);
  }

  delete() {
    console.log(this.table);
    console.log(this.recordName);
    this.crud.delete(this.table, this.recordName).subscribe(resp => {
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
