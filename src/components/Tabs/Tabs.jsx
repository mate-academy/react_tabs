import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
  }

  render() {
    const { tabs, active, onContent, tabContent } = this.props;

    return (
      <div>
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                className={tab.id === active ? 'active' : ''}
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
        <p>{tabContent}</p>
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
  active: PropTypes.string.isRequired,
  onContent: PropTypes.func.isRequired,
  tabContent: PropTypes.string.isRequired,
};
