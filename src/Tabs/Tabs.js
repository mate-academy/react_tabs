import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.css';

class Tabs extends React.Component {
  state = {
    tab: 0,
  }

  clickHandler = (index) => {
    this.setState(prevState => ({
      tab: index,
    }));
  }

  render() {
    const { tab } = this.state;
    const { tabs } = this.props;

    return (
      <ul className="tab">
        {tabs.map((currentTab, index) => (
          <li key={currentTab.title} className="tab__list">
            <button
              className={classNames({
                tab__button: true,
                'tab__button tab__button--active': tab === index,
              })}
              type="button"
              onClick={() => this.clickHandler(index)}
            >
              {currentTab.title}
            </button>
          </li>
        ))}

        <p className="content">{tabs[tab].content}</p>
      </ul>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
