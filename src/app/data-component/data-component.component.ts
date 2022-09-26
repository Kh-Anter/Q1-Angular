import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.scss']
})
export class DataComponentComponent implements OnInit {
 inputVal:string="";
 showTrueDiv:boolean=true;
 IsItFirst:boolean=true;
  constructor() { }

  OnbtnClick(){
    if(this.inputVal=="true"){
      this.showTrueDiv=true;
    }else if(this.inputVal=="false"){
      this.showTrueDiv=false;
    }
  }

  ngOnInit(): void {
  }

}
