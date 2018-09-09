import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';
import { Message } from './models';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as userAction from './store/actions/users';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$: Observable<User[]>;
  selectedUser$: Observable<User>;
  selectedMessages$: Observable<Message[]>;
  selected: number;
  open: Boolean;
  disp: String;
  flex: String;

  constructor(private store: Store<fromRoot.State>) {
    this.users$ = store.pipe(select(fromRoot.getAllUsers));
    this.selectedUser$ = store.pipe(select(fromRoot.getSelectedUser));
    this.selectedMessages$ = store.pipe(select(fromRoot.getSelectedMessage));
    this.open = false;
    this.disp = 'inline-block';
  }

  onSelectUser(id: number) {
    this.store.dispatch(new userAction.Select(id));
    this.selected = id;
  }

  OpenMessage() {
    this.open = true;
    this.disp = 'none';
    this.flex = '0 0 100px';
  }

  sendMessage(form: FormGroup) {
    const message = form.controls.message.value;
    if (message) {
      this.store.dispatch(new userAction.Send({id: this.selected, message: { sender: 'from me', text: message}}));
    }
    form.controls['message'].setValue('');
  }
}
