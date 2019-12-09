import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    contentIndex: 0,
    selectedTab: this.props.tabs[0].title,
  };

tabClick = (ev) => {
  const tabText = ev.target.innerText;

  this.setState(state => ({
    contentIndex: this.props.tabs.findIndex(item => item.title === tabText),
    selectedTab: tabText,
  }));
};

render() {
  const { tabs } = this.props;
  const { selectedTab, contentIndex } = this.state;

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          onClick={ev => this.tabClick(ev)}
          className={selectedTab === tab.title
            ? 'tabs__item active'
            : 'tabs__item'}
          type="button"
        >
          {tab.title}
        </button>
      ))}
      <div className="tabs__text">{tabs[contentIndex].content}</div>
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
