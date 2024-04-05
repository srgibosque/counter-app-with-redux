import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "./counter.actions";

// export function counterReducer(state: number = 0, action: Action): number {
//   switch(action.type){
//     case increment.type:
//       return state + 1;

//     case decrement.type:
//       return state - 1;

//     default:
//       return state;
//   }
// }

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(actions.increment, (state: number) => state + 1 ),
  on(actions.decrement, (state: number) => state - 1 ),
  on(actions.duplicate, (state: number, {number}) => state * number),
  on(actions.reset, () => initialState)
);

export function counterReducer(state: number | undefined, action: Action){
  return _counterReducer(state, action);
}