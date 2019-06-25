import { Component, OnInit } from '@angular/core';
import { ICoworkerDetails } from 'src/app/model/ICoworkerDetails';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  coworkerDetails:ICoworkerDetails[] =[{"id":1,"coworkerId":"AAA1","storeNumber":3654,"source":"Sample Source 1",coworkerFunctionalities :[{"id":1,"coworkerDetailsId":1,"functionality":"coworkerpool-a"},{"id":2,"coworkerDetailsId":1,"functionality":"availability-a"},{"id":3,"coworkerDetailsId":1,"functionality":"workschedule-a"}]},
{"id":2,"coworkerId":"AAA1","storeNumber":3705,"source":"Sample Source 2",coworkerFunctionalities :[{"id":4,"coworkerDetailsId":2,"functionality":"coworkerpool-r"},{"id":5,"coworkerDetailsId":2,"functionality":"availability-r"},{"id":6,"coworkerDetailsId":2,"functionality":"workschedule-r"},{"id":10,"coworkerDetailsId":3,"functionality":"workschedule-a"}]}];

  constructor() { }

  ngOnInit() {
  }

}
