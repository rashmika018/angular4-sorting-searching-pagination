import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  datas = [
    {
      "id":"1",
      "name": "Tiger Nixon",
      "position":"System Architect",
      "office":"Edinburgh",
      "age":"61",
      "startdate":"2011/04/25",
      "salary":"$320,800"
    },
    {
      "id":"2",
      "name":"Garrett Winters",
      "position": "Accountant",
      "office": "Tokyo",
      "age":"63",
      "startdate":"2011/07/25",
      "salary":"$170,750"
    },{
      "id":"3",
      "name":"Ashton Cox",
      "position": "Junior Technical Author",
      "office": "San Francisco",
      "age":"56",
      "startdate":"2009/01/12",
      "salary":"$86,000"
    },{
      "id":"4",
      "name":"Cedric Kelly",
      "position":"Senior Javascript Developer",
      "office":"Edinburgh",
      "age":"24",
      "startdate":"2012/03/29",
      "salary":"$433,060"
    },{
      "id":"5",
      "name":"Brielle Williamson",
      "position":"Integration Specialist",
      "office":"New York",
      "age":"48",
      "startdate":"2012/12/02",
      "salary":"$372,000"
    },{
      "id":"6",
      "name":"Herrod Chandler",
      "position":"Sales Assistant",
      "office":"San Francisco",
      "age":"35",
      "startdate":"2012/08/06",
      "salary":"$137,500"
    }
  ];
  //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}
