import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SingleItem from './SingleItem';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="container">
        <Switch>
          <Route path="/:id" component={SingleItem} />
          <Route path="/" exact component={ItemsBody} />
        </Switch>          
      </div>
    </BrowserRouter>
  );
}

export default App;
