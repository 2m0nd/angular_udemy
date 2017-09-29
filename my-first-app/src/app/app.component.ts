import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenArray = [];
  oddArray = [];
  // username = '';
  // items = [];
  // cleanupUsername() {
  //   this.username = '';
  // }
  // addItems() {
  //   this.items.push(this.items.length + 1);
  //   console.log(this.items);
  // }
  // getColor(item: number) {
  //   return item >= 5 ? 'blue' : 'transperent';
  // }
  onNewOdd (counter: number) {
    this.oddArray.push(counter);
  }
  onNewEven (counter: number) {
    this.evenArray.push(counter);
  }
}
