import React from 'react';
import PropTypes from 'prop-types';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Tab } from '../Tab/Tab';
import { TabShape } from '../shapes/TabShape';

import './Tabs.scss';

export class Tabs extends React.PureComponent {
  state = {
    currentTab: this.props.tabs[this.props.activeTab],
  }

  switchTab = (index) => {
    this.setState({
      currentTab: this.props.tabs[index],
    });
  }

  render() {
    const { switchTab } = this;
    const { currentTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="js-container jumbotron">
        <h1 className="display-4">React tabs</h1>

        <hr className="my-4" />

        <ul className="nav nav-tabs">
          {tabs.map((tab, index) => (
            <li
              key={tab.title}
              className=" nav-item"
            >
              <Tab
                tab={tab}
                switchTab={switchTab}
                index={index}
                currentTitle={currentTab.title}
              />
            </li>
          ))}
        </ul>

        <div className="js-white">
          {currentTab.content}
          <LoremIpsum
            p="1"
            startWithLoremIpsum={false}
          />
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  activeTab: PropTypes.number,
  tabs: PropTypes.arrayOf(TabShape).isRequired,
};

Tabs.defaultProps = {
  activeTab: 0,
};
