import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  {
  @Input() message: string;
  clicksCounter: number = 0;

  logMessageWithCounter(): void {
    console.log('component clicked ' + (++this.clicksCounter) + ' times, content: ', this.message);
  }

}
