import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>        
        <div className="container">
          <Route path="/" exact component={ItemsBody} />          
        </div>
      </Switch>      
    </BrowserRouter>
  );
}

export default App;
