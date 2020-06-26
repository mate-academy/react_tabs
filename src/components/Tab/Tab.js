import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import tabs from '../../box/tabs';
import Switch from './Switch';
/* eslint-disable */
const Tab = () => (
  <Router>
    <div className="tab__tittle">
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.title}>
          <NavLink
            to={`/switch/${index}`}
            className="tab__element"
          >
            {tab.title}
          </NavLink>
        </React.Fragment>
      ))}
    </div>

    <Route path="/switch/:id" component={Switch} className="tab__content"/>
  </Router>
);

export default Tab;
