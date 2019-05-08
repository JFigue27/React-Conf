import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgesNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgesNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
