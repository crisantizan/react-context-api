import { ChangeUsernameType, CHANGE_USERNAME } from './root-action-types';

/** [root state] change username */
export function changeUsername(newName: string): ChangeUsernameType {
  return {
    type: CHANGE_USERNAME,
    payload: newName,
  };
}
