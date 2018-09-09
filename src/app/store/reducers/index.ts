import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromUsers from './users';


export interface State {
    users: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
    users: fromUsers.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getUsersState = createFeatureSelector<fromUsers.State>('users');


export const getUsers = createSelector(
    getUsersState,
    fromUsers.getUsers,
);

export const getSelected = createSelector(
    getUsersState,
    fromUsers.getSelected,
);

export const getSelectedUser = createSelector(
    getSelected,
    getUsers,
    (selectedId, users) => {
        return {
            ...users[selectedId].user
        };
    }
);

export const getSelectedMessage = createSelector(
    getSelected,
    getUsers,
    (selectedId, users) => {
        return users[selectedId].messages;
    }
);

export const getAllUsers = createSelector(
    getUsers,
    (users) => {
        return Object.keys(users).map(id => users[id].user);
    }
);
