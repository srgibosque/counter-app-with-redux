import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.css'
})
export class DaughterComponent implements OnInit {
  // @Input() counter!: number;
  // @Output() counterChanged = new EventEmitter<number>();

  counter!: number;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter: number) =>{
      this.counter = counter;
    })
  }

  duplicate(): void{
    // this.counter = this.counter * 2;
    // this.counterChanged.emit(this.counter);
    this.store.dispatch(actions.duplicate({number: 2}));
  }

  // resetGrandDaughter(newCounter: number): void{
  //   this.counter = newCounter;
  //   this.counterChanged.emit(this.counter);
  // }
}
