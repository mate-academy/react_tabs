import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  tabSelect = index => this.setState({ tabIndex: index });

  render() {
    const { tabIndex } = this.state;
    const { tabs } = this.props;

    return (
      <>
        {tabs.map((tab, index) => (
          <button
            type="button"
            className={index === tabIndex ? 'tab tab--active' : 'tab'}
            key={tab.title}
            onClick={() => this.tabSelect(index)}
          >
            {tab.title}
          </button>
        ))}
        <div
          className="tab__content"
        >
          {tabs[tabIndex].content}
        </div>
      </>
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
