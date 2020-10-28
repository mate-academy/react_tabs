import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';
import { tabShape } from '../shapes/tabShape';

import './Tabs.scss';

export class Tabs extends React.PureComponent {
  state = {
    selectedTab: 0,
  }

  selectTab = (index) => {
    this.setState({ selectedTab: index });
  }

  render() {
    const { tabs } = this.props;
    const { selectedTab } = this.state;

    return (
      <>
        <div className="Tabs">
          {
            tabs.map((tab, index) => (
              <Tab
                key={tab.title}
                tabTitle={tab.title}
                isSelected={index === selectedTab}
                hanleClick={() => this.selectTab(index)}
              />
            ))
          }
        </div>

        <div className="App__content">
          {tabs[selectedTab].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabShape).isRequired,
};
