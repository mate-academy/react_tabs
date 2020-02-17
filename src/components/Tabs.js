import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { activeTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="container">
        <div className="tabs">
          <ul>
            {tabs.map((tab, index) => (
              <li
                className={activeTab === index ? 'is-active' : ''}
              >
                <button
                  className="button is-medium"
                  type="button"
                  key={tab.id}
                  onClick={() => this.onTabSelected(index)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="content is-large">{tabs[activeTab].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};
