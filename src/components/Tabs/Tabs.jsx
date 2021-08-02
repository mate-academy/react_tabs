import React, { PureComponent } from 'react';
import PropTypes, { arrayOf } from 'prop-types';

export class Tabs extends PureComponent {
  render() {
    const { tabs, selectedTab, onTabSelected } = this.props;

    return (
      <>
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
        <p>
          {selectedTab.content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
