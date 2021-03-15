import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
  }

  render() {
    const { tabs, onContent, selectedTab } = this.props;

    return (
      <div>
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                className={tab.id === selectedTab.id ? 'active' : ''}
                type="button"
                onClick={() => (
                  onContent(tab)
                )}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <p>{selectedTab.content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onContent: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
