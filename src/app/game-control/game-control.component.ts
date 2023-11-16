import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() gamesStarted = new EventEmitter<{ number: number, type: string }>();
  private timer;
  private i: number;
  onGameStart() {
    this.i = 1;
    this.timer = setInterval(
      () => this.emitEvent(), 1000);
  }

  onGameStop() {
    clearInterval(this.timer);
  }

  emitEvent() {
    const type = this.i % 2 === 0 ? 'even' : 'odd';
    this.gamesStarted.emit({ number: this.i, type: type });
    console.log('geme with index started:' + this.i);
    this.i++;
  }
}
