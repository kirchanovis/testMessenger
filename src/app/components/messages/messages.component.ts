import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Output() send = new EventEmitter();
  sendForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sendForm = formBuilder.group({
      message: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

}
