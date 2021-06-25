import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stwatch',
  templateUrl: './stwatch.component.html',
  styleUrls: ['./stwatch.component.scss']
})
export class StwatchComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  goClock(){
    this.router.navigateByUrl('/clock')
  }
  present = "welcome";
  commandText : String = "";
  startTime($event: string){
    this.present = $event;
  }

  ngOnInit(): void {
  }
}
