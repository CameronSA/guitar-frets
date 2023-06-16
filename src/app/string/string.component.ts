import { Component } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent {
  numberFrets: Array<number>
  constructor(){
    this.numberFrets = [];
    for (let i = 0; i <20; i++) {
      this.numberFrets.push(i);
    }
  }
}
