import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    index: 0,
  }

  tabSelect = i => this.setState({ index: i });

  render() {
    const { index } = this.state;
    const { tabs } = this.props;

    return (
      <>
        {tabs.map((tab, i) => (
          <button
            type="button"
            className={i === index ? 'tab tab--active' : 'tab'}
            key={tab.title}
            onClick={() => this.tabSelect(i)}
          >
            {tab.title}
          </button>
        ))}
        <div
          className="tab__content"
        >
          {tabs[index].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
