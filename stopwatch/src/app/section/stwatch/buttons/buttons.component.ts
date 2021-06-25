import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  //Output이라는 decorateor는 component에게 이벤트를 발생시켜줌
  //부모 component인 Section에게 데이터를 넘기기 위해 EventEmitter를 이용
  @Output() clickEvent = new EventEmitter(); // new EventEmitter<string>()으로 지정시 emit할 때 string만을 넘겨야 함

  constructor() { }

  executeButton(command : String){
    this.clickEvent.emit(command); //부모컴포넌트인 section에게 데이터를 넘겨주는 역할을 함

  }
  ngOnInit(): void {
  }

}
