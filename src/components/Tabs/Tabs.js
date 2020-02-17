import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    selectedTab: 0,
  }

  onTabSelected = (index) => {
    this.setState({ selectedTab: index });
  };

  render() {
    const { selectedTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            index={index}
            className={
              classNames({
                tabs__button: true,
                'tabs__button--active': selectedTab === index,
              })
            }
            onClick={() => {
              this.onTabSelected(index);
            }}
          >
            {tab.title}
          </button>
        ))}
        <p className="tabs__content">{tabs[selectedTab].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
