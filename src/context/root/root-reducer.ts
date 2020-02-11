import { RootStateModel } from './root.model';
import { RootActionTypes } from './root-action-types';

export const rootReducer = (state: RootStateModel, action: RootActionTypes) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return { ...state, user: { ...state.user, name: action.payload } };

    default:
      return state;
  }
};
