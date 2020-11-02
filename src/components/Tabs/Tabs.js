import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    selectedTabId: 0,
  }

  onTabSelected = (selectedId) => {
    this.setState({
      selectedTabId: selectedId,
    });
  }

  render() {
    const { selectedTabId } = this.state;
    const { tabs } = this.props;
    const { onTabSelected } = this;
    const currentTab = tabs.find(tab => tab.id === selectedTabId);

    return (
      <div className="card">
        <div className="card-header">
          <ul className="card-header-tabs nav nav-tabs">
            {tabs.map(tab => (
              <li key={tab.id} className="nav-item">
                <button
                  type="button"
                  className={
                    `nav-link ${tab.id === selectedTabId ? 'active' : ''}`
                  }
                  style={{ outline: 'none' }}
                  onClick={() => onTabSelected(tab.id)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body">
          <p>
            {currentTab.content}
          </p>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
