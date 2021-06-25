import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { }
  present = "welcome";
  commandText : String = "";
  startTime($event: string){
    this.present = $event;
  }

  ngOnInit(): void {
  }

}
