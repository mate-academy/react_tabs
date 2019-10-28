import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClasses: [false, false, false],
    };
  }

  addActiveClass(index) {
    const activeClasses = [false, false, false];

    activeClasses[index] = true;
    this.setState({ activeClasses });
  }

  render() {
    const { tabs } = this.props;
    const checkActiveLink1 = this.state.activeClasses[0]
      ? 'active item' : 'item';
    const checkActiveLink2 = this.state.activeClasses[1]
      ? 'active item' : 'item';
    const checkActiveLink3 = this.state.activeClasses[2]
      ? 'active item' : 'item';

    return (
      <Router>
        <div>
          <div className="ui attached tabular menu">
            <Link to="/1">
              <a className={checkActiveLink1} onClick={() => this.addActiveClass(0)}>
                {tabs[0].title}</a>
            </Link>
            <Link to="/2">
              <a className={checkActiveLink2} onClick={() => this.addActiveClass(1)}>
                {tabs[1].title}</a>
            </Link>
            <Link to="/3">
            <a className={checkActiveLink3} onClick={() => this.addActiveClass(2)}>
                {tabs[2].title}</a>
            </Link>
          </div>
          <Switch>
            <Route path="/1" render={(props) => <Tab1 content={tabs[0].content} />} />
            <Route path="/2" render={(props) => <Tab2 content={tabs[1].content} />} />
            <Route path="/3" render={(props) => <Tab3 content={tabs[2].content} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default Tabs;
