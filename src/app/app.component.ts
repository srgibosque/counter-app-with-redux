import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from './Counter/counter.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app-with-redux';
  counter!: number;

  constructor(private store: Store<AppState>){
    // this.counter = 20;
    this.store.subscribe((state) => {
      this.counter = state.counter;
    })
  }

  increase(): void{
    this.store.dispatch(actions.increment());
  }

  decrease(): void{
    this.store.dispatch(actions.decrement());
  }
}
