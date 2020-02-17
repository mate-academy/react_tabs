import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  click = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabIndex } = this.state;
    const { tabs } = this.props;

    return (
      <div>
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => this.click(index)}
            className={classNames({
              tab__btn: true,
              'tab__btn--active': tabIndex === index,
            })}
          >
            {tab.title}
          </button>
        ))}
        <p className="tab__content">{tabs[tabIndex].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
