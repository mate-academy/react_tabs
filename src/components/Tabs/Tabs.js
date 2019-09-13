import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      tabId: 0,
    };
  }

  choseTab = (index) => {
    this.setState({
      tabId: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { tabId } = this.state;

    return (
      <>
        <div className="wrapper">
          {tabs.map(({ title }, i) => (
            <Tab
              handleClick={() => this.choseTab(i)}
              key={title}
              title={title}
              index={i}
              isActive={tabId}
            />
          ))}
        </div>
        <div className="text-container">
          {tabs[tabId].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
