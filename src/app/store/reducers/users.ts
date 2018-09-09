import { Action } from '@ngrx/store';
import * as userAction from '../actions/users';

import { User } from '../../models';
import { Message } from '../../models';



export interface State {
  users: {
    [id: number]:
      {
      user: User,
      messages: Message[]
    }
  };
  selected: number;
}

export const initialState: State = {
  users: {
    1: {
      user: {
        id: 1,
        name: 'Петр Петров',
        shortname: 'ПП',
        age: 21,
        city: 'Москва',
        description: 'Занимаюсь спортом',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, как дела',
        },
        {
          sender: 'to me',
          text: 'Привет, хорошо',
        }
      ]
    },
    2: {
      user: {
        id: 2,
        name: 'Семен Семенов',
        shortname: 'СС',
        age: 25,
        city: 'Волгоград',
        description: 'Занимаюсь спортом, и плаваю',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, как дела?',
        },
        {
          sender: 'to me',
          text: 'Привет, хорошо)',
        }
      ]
    },
    3: {
      user: {
        id: 3,
        name: 'Семен Петров',
        shortname: 'СП',
        age: 26,
        city: 'Подольск',
        description: 'Занимаюсь пинпонгом',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, как дела, друг?',
        },
        {
          sender: 'to me',
          text: 'Привет, все по старому)',
        }
      ]
    },
    4: {
      user: {
        id: 4,
        name: 'Виктор Суслов',
        shortname: 'ВС',
        age: 29,
        city: 'Рим',
        description: 'Занимаюсь римской борьбой',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, давно не слышал тебя?',
        },
        {
          sender: 'to me',
          text: 'Привет, я тоже)',
        },
        {
          sender: 'from me',
          text: 'Приезжай в гости',
        },
      ]
    },
    5: {
      user: {
        id: 5,
        name: 'Дмитрий Иванов',
        shortname: 'ДИ',
        age: 32,
        city: 'Саратов',
        description: 'Ни чем не занимаюсь',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, как делишки?',
        },
        {
          sender: 'to me',
          text: 'Привет, хорошо)',
        }
      ]
    },
    6: {
      user: {
        id: 6,
        name: 'Генадий Аркадьев',
        shortname: 'ГА',
        age: 25,
        city: 'Михайловск',
        description: 'Занимаюсь вышивкой',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, как дела?',
        },
        {
          sender: 'to me',
          text: 'Привет, хорошо)',
        }
      ]
    },
    7: {
      user: {
        id: 7,
        name: 'Артем Дзюба',
        shortname: 'АД',
        age: 30,
        city: 'Санкт-Петербург',
        description: 'Занимаюсь футболом',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, с днем рождения?',
        },
        {
          sender: 'to me',
          text: 'Привет, от души)',
        }
      ]
    },
    8: {
      user: {
        id: 8,
        name: 'Виталий Бровкин',
        shortname: 'ВБ',
        age: 25,
        city: 'Москва',
        description: 'Занимаюсь бизнесом',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, как бизнес?',
        },
        {
          sender: 'to me',
          text: 'Привет, растет)',
        }
      ]
    },
    9: {
      user: {
        id: 9,
        name: 'Аркадий Укупник',
        shortname: 'АУ',
        age: 55,
        city: 'Москва',
        description: 'Занимаюсь пением',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, куда пропал?',
        },
        {
          sender: 'to me',
          text: 'Привет, я никуда не пропадал)',
        }
      ]
    },
    10: {
      user: {
        id: 10,
        name: 'Семен Виталькин',
        shortname: 'СВ',
        age: 25,
        city: 'Волгодонск',
        description: 'Занимаюсь ребалкой',
      },
      messages: [
        {
          sender: 'from me',
          text: 'Привет, поймал леща?',
        },
        {
          sender: 'to me',
          text: 'Привет, да, больно было',
        }
      ]
    },
  },
  selected: null,
};

export function reducer(state = initialState, action: userAction.Action) {
  switch (action.type) {

    case userAction.SEND: {
      const {id, message } = action.payload;
      state.users[id].messages.push(message);
      return {
        ...state,
      };
    }

    case userAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;
export const getSelected = (state: State) => state.selected;

