import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    selectedTab: 'Tab 1',
  }

  onTabSelected = (title) => {
    this.setState({
      selectedTab: title,
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { tabs } = this.props;

    const visibleTabText = tabs.find(tab => tab.title === selectedTab);

    return (
      <>
        <div className="tab">
          {tabs.map(tab => (
            <button
              className={ClassNames({ active: tab.title === selectedTab })}
              key={tab.title}
              type="button"
              onClick={() => {
                this.onTabSelected(tab.title);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab__content">
          {visibleTabText.content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
};
