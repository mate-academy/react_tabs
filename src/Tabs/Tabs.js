import React from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends React.Component {
  state = {
    enabeledTab: 0,
  }

  tabSwapping = (btn, index) => {
    this.setState({ enabeledTab: index });
  };

  render() {
    const { tabs } = this.props;
    const { enabeledTab } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__row">
          {tabs.map((tab, index) => (
            <button
              className={enabeledTab === index
                ? 'tabs__enabled-button'
                : 'tabs__button'}
              key={tab.title}
              type="button"
              onClick={btn => this.tabSwapping(btn, index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="tabs__content">
          {tabs[enabeledTab].content}
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
  ).isRequired,
};
