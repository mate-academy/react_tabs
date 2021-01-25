import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    activeTitle: 'Tab 1',
  }

  handleChange = (title) => {
    this.setState({
      activeTitle: title,
    });
  }

  render() {
    const { activeTitle } = this.state;
    const { tabs } = this.props;
    const selectedTab = tabs.find(tab => tab.title === activeTitle);

    return (
      <>
        <div>
          {tabs.map(tab => (
            <button
              className={activeTitle === tab.title ? 'tab active' : 'tab'}
              key={tab.title}
              type="button"
              onClick={() => {
                this.handleChange(tab.title);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="content">
          {selectedTab.content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
};

export default Tabs;
