import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    selectedTabIndex: 0,
  }

  render() {
    const { tabs } = this.props;
    const { selectedTabIndex } = this.state;

    return (
      <div className="Tabs">
        <div className="Tabs__bar">
          {tabs.map((tab, index) => (
            <button
              className={ClassNames(
                'Tabs__tab',
                { 'Tabs__tab--selected': selectedTabIndex === index },
              )}
              type="button"
              key={tab.title}
              onClick={() => this.setState({ selectedTabIndex: index })}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="Tabs__content">
          {tabs[selectedTabIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
