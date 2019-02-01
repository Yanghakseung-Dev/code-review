import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
// import AppTodo from './AppTodo';
import AppRouter from './AppRouter';
import {auth, AuthContext} from './contexts/index';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppTodo />, document.getElementById('root'));
//ReactDOM.render(<AppRoute />, document.getElementById('root'));
ReactDOM.render(
  <AuthContext.Provider value={auth}>
    <AppRouter />
  </AuthContext.Provider>,
  document.getElementById('root')
);
