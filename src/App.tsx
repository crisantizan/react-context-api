import React, { useContext, useState } from 'react';
import { RootContext } from './context/root/root-context';
import { changeUsername } from './context/root/root-actions';

const App = () => {
  const { selector, dispatch } = useContext(RootContext);
  const [user, state] = selector(state => [state.user, state]);

  const [name, setName] = useState('');

  /** handle change username */
  function handleChangeUsername() {
    dispatch(changeUsername(name));
  }

  return (
    <div
      className="app"
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={{ width: '500px', display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="new name"
          style={{ marginBottom: '10px' }}
        />
        <button onClick={() => handleChangeUsername()}>Change Name</button>
      </div>
      <pre style={{ fontSize: '30px' }}>
        USER DATA ONLY: {JSON.stringify(user)}
      </pre>

      <pre style={{ fontSize: '30px' }}>FULL DATA: {JSON.stringify(state)}</pre>
    </div>
  );
};

export default App;
