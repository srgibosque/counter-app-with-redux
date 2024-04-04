import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-granddaughter',
  templateUrl: './granddaughter.component.html',
  styleUrl: './granddaughter.component.css'
})
export class GranddaughterComponent {
  @Input() counter!: number;
  @Output() counterChanged = new EventEmitter<number>();

  constructor(){}

  reset(): void{
    this.counter = 0;
    this.counterChanged.emit(this.counter);
  }
}
