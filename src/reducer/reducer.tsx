import {EventActionType} from './action-type';
import {Action} from './actions';

export interface ReducerState {
  [key: string]: string | null | undefined;
}

export function reducer(
  state: ReducerState,
  action: Action<any>
): ReducerState {
  if (action.type === EventActionType.SAVE_EVENT) {
    return {...state, [action.payload.hour]: action.payload.eventReminder};
  }

  if (action.type === EventActionType.CLEAR_EVENT) {
    return {...state, [action.payload.hour]: null};
  }

  if (action.type === EventActionType.UPDATE_EVENT) {
    return {...state, [action.payload.hour]: action.payload.eventReminder};
  }

  return state;
}

// function addCalendarEventReducer(state: any, action: any) {
//   return {
//     ...state,
//     events: [...state.events, action.payload],
//   };
// }

// function deleteCalendarEventReducer(state: any, action: any) {
//   const events = state.events.filter((event: {id: any}) => {
//     return event.id !== action.payload.id;
//   });
//   return {
//     ...state,
//     events,
//   };
// }

// function editCalendarEventReducer(state: any, action: any) {
//   return {
//     ...state,
//     events: [
//       ...state.dates.map((event: any) => {
//         if (event.id === action.payload.id) {
//           return {
//             ...event,
//             ...action.payload,
//           };
//         }
//         return event;
//       }),
//     ],
//   };
// }

// export function reducer(state: any, action: any) {
//   // const handler = handlerMapper[action.type];
//   // return handler ? handler(state, action) : state;

//   switch (action.type) {
//     case actionType.ADD_CALENDAR_EVENT:
//       return addCalendarEventReducer(state, action);

//     case actionType.EDIT_CALENDAR_EVENT:
//       return editCalendarEventReducer(state, action);

//     case actionType.DELETE_CALENDAR_EVENT:
//       return deleteCalendarEventReducer(state, action);
//     default:
//       return state;
//   }
// }
