import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tabs extends React.Component {
  state = {
    enabeledTab: 0,
  }

  tabSwapping = (e, index) => {
    this.setState({ enabeledTab: index });
  };

  buttonClasses = index => classNames({
    tabs__button: true,
    'tabs__enabled-button':
      this.state.enabeledTab === index,
  });

  render() {
    const { tabs } = this.props;
    const { enabeledTab } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__row">
          {tabs.map((tab, index) => (
            <button
              className={this.buttonClasses(index)}
              key={tab.title}
              type="button"
              onClick={e => this.tabSwapping(e, index)}
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
