import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() user: User;
  @Output() open = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
