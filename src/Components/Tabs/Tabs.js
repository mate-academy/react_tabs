import React from 'react';
import Tab from '../Tab/Tab';
import { tabsPropTypes } from '../PropTypes/PropTypes';
import './Tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onTabSelected = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        <div className="wrapper">
          <div className="tab-list">
            {tabs.map(({ title }, i) => (
              <Tab
                handleClick={() => this.onTabSelected(i)}
                key={title}
                title={title}
                index={i}
                isActive={activeTab}
              />
            ))}
          </div>
        </div>
        <div className="text-container">
          {tabs[activeTab].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = tabsPropTypes;

export default Tabs;
