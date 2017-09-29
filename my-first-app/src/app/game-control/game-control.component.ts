import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  timer;

  @Output() newOdd = new EventEmitter<number>();
  @Output() newEven = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  gameProcess() {
    this.counter++;
    if (this.counter % 2 === 1) {
      console.log(this.counter);
      this.newOdd.emit(this.counter);
    } else {
      console.log(this.counter);
      this.newEven.emit(this.counter);
    }
  }

  startGame() {
    this.timer = setInterval(() => this.gameProcess(), 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }
}
