import React from 'react';

import './Tabs.css';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  render() {
    const { tabs, onTabSelected, selectedTabId } = this.props;

    return (
      <div className="Tabs">
        {
          tabs.map(tab => (
            <button
              key={tab.id}
              className={selectedTabId === tab.id ? 'active' : ''}
              type="button"
              onClick={() => onTabSelected(tab.id)}
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
