import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { activeTabIndex: 0 };

tabClick = (ev) => {
  this.setState(state => ({
    activeTabIndex: this.props.tabs.findIndex(
      item => item.title === ev.target.innerText
    ),
  }));
};

render() {
  const { tabs } = this.props;
  const { activeTabIndex } = this.state;

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          onClick={ev => this.tabClick(ev)}
          className={activeTabIndex === index
            ? 'tabs__item active'
            : 'tabs__item'}
          type="button"
        >
          {tab.title}
        </button>
      ))}
      <div className="tabs__text">{tabs[activeTabIndex].content}</div>
    </div>
  );
}
}

Tabs.propTypes = {
  tabs: PropTypes.shape({
    text: PropTypes.string,
    content: PropTypes.string,
    findIndex: PropTypes.func,
  }).isRequired,
};

export default Tabs;
