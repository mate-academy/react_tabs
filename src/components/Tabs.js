import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export class Tabs extends React.Component {
  state = {
    activeTabIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { tabs } = this.props;

    return (
      <div>
        {tabs.map((tab, index) => (
          <Tab
            className={index === activeTabIndex ? 'active' : ''}
            key={tab.title}
            tab={tab}
            onTabSelected={this.onTabSelected}
            index={index}
          />
        ))}

        <p>
          {tabs.map((tab, index) => {
            if (index === activeTabIndex) {
              return tab.content;
            }

            return null;
          })}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Tabs.defaultProps = {
  tabs: [],
};
