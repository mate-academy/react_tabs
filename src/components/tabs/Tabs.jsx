import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    selectedTab: 0,
  };

  onTabSelected = (selected) => {
    this.setState({
      selectedTab: selected,
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { tabs } = this.props;
    const { onTabSelected } = this;
    const currentTab = tabs.find(tab => tab.id === selectedTab);

    return (
      <>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            {tabs.map(tab => (
              <li key={tab.id} className="nav-item">
                <button
                  type="button"
                  onClick={() => onTabSelected(tab.id)}
                  style={{ outline: 'none' }}
                  className={
                    `nav-link ${tab.id === selectedTab ? 'active' : ''}`
                  }
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-body">
          <p className="card-text">Hey, here is</p>
          {' '}
          <h5 className="card-title">{currentTab.content}</h5>
        </div>
      </>
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
