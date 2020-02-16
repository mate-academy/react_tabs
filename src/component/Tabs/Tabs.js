import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export default class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  render() {
    const { activeTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="wrapper">
        {tabs.map((tab, index) => (
          <button
            className={activeTab === index ? 'btn btn--active' : 'btn'}
            type="button"
            key="tab.title"
            onClick={() => this.setState({ activeTab: index })}
          >
            {tab.title}
          </button>
        ))}
        <p className="content">{tabs[activeTab].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
