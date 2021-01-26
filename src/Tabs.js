import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tabs extends React.Component {
  state = {
    activeTabTitle: 'Tab 1',
  };

  onTabSelected = (value) => {
    this.setState({ activeTabTitle: value });
  }

  render() {
    const { tabs } = this.props;
    const { activeTabTitle } = this.state;

    return (
      <div>
        {tabs.map(tab => (
          <button
            className={classNames('button',
              { active: activeTabTitle === tab.title })}
            key={tab.title}
            type="button"
            onClick={() => {
              this.onTabSelected(tab.title);
            }}
          >
            {tab.title}
          </button>
        ))}
        <div className="content">
          {tabs.find(tab => tab.title === activeTabTitle).content}
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
