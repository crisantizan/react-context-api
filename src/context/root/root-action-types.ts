/** root state action types */
export const CHANGE_USERNAME = 'CHANGE_USERNAME';

export interface ChangeUsernameType {
  type: typeof CHANGE_USERNAME;
  payload: string;
}

export type RootActionTypes = ChangeUsernameType;
