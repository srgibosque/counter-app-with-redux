import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-granddaughter',
  templateUrl: './granddaughter.component.html',
  styleUrl: './granddaughter.component.css'
})
export class GranddaughterComponent implements OnInit {
  // @Input() counter!: number;
  // @Output() counterChanged = new EventEmitter<number>();
  counter!: number;

  constructor(private store: Store<AppState>){
  }

  ngOnInit(): void{
    this.store.select('counter').subscribe((counter: number) => {
      this.counter = counter;
    })
  }

  reset(): void{
    // this.counter = 0;
    // this.counterChanged.emit(this.counter);
    this.store.dispatch(actions.reset());
  }
}
