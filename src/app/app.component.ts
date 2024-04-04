import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app-with-redux';

  counter: number;

  constructor(){
    this.counter = 20;
  }

  increase(): void{
    this.counter += 1;
  }

  decrease(): void{
    this.counter -= 1;
  }
}
