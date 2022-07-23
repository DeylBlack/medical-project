import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() public placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
