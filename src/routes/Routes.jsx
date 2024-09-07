import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import FlatsListingPage from '@/pages/Listings/FlatListing';
import HomesListing from '@/pages/Listings/HomesListing';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/flats' component={FlatsListingPage} />
        <Route exact path='/homes' component={HomesListing} />


      </Switch>
    </Router>
  );
}
