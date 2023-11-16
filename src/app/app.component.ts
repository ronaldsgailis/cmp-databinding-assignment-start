import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startedGames = [];

  onGameStarted(gameData: { number: number, type: string }) {
    this.startedGames.push(gameData);
  }
}
