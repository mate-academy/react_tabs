import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import Content from '../Content/Content';
import Tab from '../Tab/Tab';

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
  };

  render() {
    const { activeTab } = this.state;
    const { tabs } = this.props;

    return (
      <>
        <ul className="list">
          {tabs.map((tab, i) => (
            <Tab
              index={i}
              key={tab.title}
              clickHandler={() => this.onTabSelected(i)}
              isActive={activeTab}
              title={tab.title}
            >
              {tab.title}
            </Tab>
          ))}
        </ul>
        <Content currentTab={tabs[activeTab]} />
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Tabs;
