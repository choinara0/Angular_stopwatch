
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: String | undefined



  test = 1;

  constructor() {

  //   setInterval(() => {

  //     this.test ++;

  //   }, 1000)

    console.log(this.inputData);

  }



  ngOnInit(): void {
  }

}
