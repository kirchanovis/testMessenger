import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  @Input() users: User[];
  @Input() display: String;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
