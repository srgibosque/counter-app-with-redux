import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.css'
})
export class DaughterComponent implements OnInit {
  @Input() counter!: number;
  @Output() counterChanged = new EventEmitter<number>();

  constructor(){}

  ngOnInit(): void {}

  duplicate(): void{
    this.counter = this.counter * 2;
    this.counterChanged.emit(this.counter);
  }

  resetGrandDaughter(newCounter: number): void{
    this.counter = newCounter;
    this.counterChanged.emit(this.counter);
  }
}
