import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {}

  render() {
    const { tabs, selectedTab, onTabSelected } = this.props;

    return (
      <>
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <div className="buttons">
          {tabs.map(tab => (
            <button
              type="button"
              className={className(
                'button', selectedTab.id === tab.id ? 'active' : '',
              )}
              value={selectedTab}
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          ))}
          <div className="bottom-line" />
        </div>
        <div className="content">
          {selectedTab.content}
        </div>
      </>
    );
  }
}

const tabTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

Tabs.propTypes = {
  selectedTab: PropTypes.shape(tabTypes).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape(tabTypes),
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
