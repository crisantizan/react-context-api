import React, { useReducer } from 'react';
import { RootStateModel } from './root.model';
import { ContextModel } from '../context.model';
import { rootReducer } from './root-reducer';

export const RootContext = React.createContext(
  {} as ContextModel<RootStateModel>,
);

export const rootInitialState: RootStateModel = {
  user: {
    name: 'Foo',
    lastname: 'Bar',
    age: 23,
  },
};

export function RootProvider({ children }: any) {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  /** proxy to select state */
  function selector(cb: any) {
    return cb(state);
  }

  return (
    <RootContext.Provider value={{ selector, dispatch }}>
      {children}
    </RootContext.Provider>
  );
}
