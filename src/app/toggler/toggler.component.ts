import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css'],
})
export class TogglerComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();
  showNotes: boolean = false;
  displayText: string = '';
  @Input() trueText: string = '';
  @Input() falseText: string = '';

  ngOnInit(): void {
    this.updateDisplayText();
  }

  onToggle() {
    this.showNotes = !this.showNotes;
    this.updateDisplayText();
    this.toggleEvent.emit(this.showNotes);
  }

  updateDisplayText() {
    if(this.showNotes) {
      this.displayText = this.trueText;
    }else {
      this.displayText = this.falseText;
    }
  }
}
