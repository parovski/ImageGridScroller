import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';
import { ImggridService } from '../_services/imggrid.service';
import { TooltipModule } from 'ngx-tooltip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // define an array
  data: any[] = [];
  // data2: any[] = [];

  // define an array
  // list of arrays
  finalData: any[] = [];

  // test - data
  // data2: any[] = [];
  // data3: any[] = [];

  // jsonP: JsonpCallbackContext;
  // model: any = {};

  constructor(private imggrid: ImggridService) {}

  // define the counter to 500,
  // and push the array (this.data) in the list of arrays (finalData)
  startCount() {
    for (let i = 0; i < 500; i++) {
      this.finalData.push(this.data);
      // this.finalData.push(this.data2);
    }
  }

  ngOnInit() {
    // get the data -> fetch the data from the imggrid.service (from the API get method in the service)
    this.imggrid.getDataGridImages().subscribe(
      res => {
        // this.data = res[0].items;  // map the data here
        this.data = res[0].items;
        // this.data2 = res[1].items;
        this.startCount();         // initialize data counter here
        // console.log(this.finalData);
      },
      error => {
        console.log(error);
      }
    );
  }

}
