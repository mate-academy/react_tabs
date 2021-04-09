import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  render() {
    const { tabs, selectedTabId, onTabSelected } = this.props;

    return (
      <>
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={classNames(
                'tab', { active: tab.id === selectedTabId },
              )}
              value={tab}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="content">
          {tabs[tabs.findIndex(tab => tab.id === selectedTabId)].content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
