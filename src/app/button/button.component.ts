import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter();
  @Input() displayText = ''

  onClick() {
    this.clickEvent.emit();
  }

}
