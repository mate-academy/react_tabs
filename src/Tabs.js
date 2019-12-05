import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
state = { textOnClick: this.props.tabs[0].content };

tabClick = (ev) => {
  const tabText = ev.target.innerText;
  const newText = this.props.tabs.find(item => item.title === tabText);

  this.setState(state => ({ textOnClick: newText.content }));
};

render() {
  const { tabs } = this.props;

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          onClick={ev => this.tabClick(ev)}
          className="tabs__item"
          type="button"
        >
          {tab.title}
        </button>
      ))}
      <div className="tabs__text">{this.state.textOnClick}</div>
    </div>
  );
}
}

Tabs.propTypes = {
  tabs: PropTypes.shape({
    text: PropTypes.string,
    content: PropTypes.string,
    find: PropTypes.func,
  }).isRequired,
};

export default Tabs;
