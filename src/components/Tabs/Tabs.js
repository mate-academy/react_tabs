import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  render() {
    const { activeTab } = this.state;
    const { tabs } = this.props;
    const handleClick = index => this.setState({ activeTab: index });
    const getClass = index => classNames({
      button: true,
      'button--active': activeTab === index,
    });

    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            className={getClass(index)}
            type="button"
            key={tab.title}
            onClick={() => handleClick(index)}
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
