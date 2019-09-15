import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  getActiveTab = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        <div className="tabs tabs__container">
          <div className="tabs__wrapper">
            {tabs.map(({ title }, index) => (
              <Tab
                handleClick={() => this.getActiveTab(index)}
                title={title}
                key={title}
                index={index}
                isActiveTab={activeTab}
              />
            ))}
          </div>
        </div>
        <p className="tabs__content">
          { tabs[activeTab].content }
        </p>
      </>
    );
  }
}

Tabs.propTypes = ({
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.srting,
    content: PropTypes.srting,
  })),
}).isRequired;

export default Tabs;
