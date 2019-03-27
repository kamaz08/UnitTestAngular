import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-test-component',
  templateUrl: './number-test-component.component.html',
  styleUrls: ['./number-test-component.component.css']
})
export class NumberTestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numbers = [1231.12312,2,3,4,5,612312,12312.23,123123113211.12132133123132133623, 132.19999];


}
