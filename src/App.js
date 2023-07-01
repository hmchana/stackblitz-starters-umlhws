import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TodoPage} />
      </Switch>
    </div>
  );
}

export default App;
