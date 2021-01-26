import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tabs extends React.PureComponent {
  render() {
    const { tabs, selectedTab, onTabSelected } = this.props;

    return (
      <div>
        {
          tabs.map((tab, i) => (
            <button
              type="button"
              className={classNames('tabs', { active_tab: +selectedTab === i })}
              key={tab.title}
              onClick={onTabSelected}
            >
              {tab.title}
            </button>
          ))
        }
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
