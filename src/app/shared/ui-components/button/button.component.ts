import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = '';

  @Input() public backgroundColor: string = '';

  @Input() public color: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
