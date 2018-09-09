import { Action } from '@ngrx/store';
import { Message } from '../../models';

export const SELECT = '[User] Select User';
export const SEND = '[User] Send Message';

export class Select implements Action {
    readonly type = SELECT;

    constructor(public payload: number) { }
}

export class Send implements Action {
    readonly type = SEND;

    constructor(public payload: {id: number, message: Message} ) { }
}

export type Action =  Select | Send;

