import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import Content from './Content';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeTab: 0 };
  }

  onTabSelected(index) {
    this.setState({ activeTab: index });
  }

  render() {
    const { activeTab } = this.state;
    const { tabsArr } = this.props;

    return (
      <>
        <ul className="list">
          {tabsArr.map(({ title }, i) => (
            <Tab
              index={i}
              key={title}
              clickHandler={() => this.onTabSelected(i)}
              isActive={activeTab}
              title={title}
            >
              {title}
            </Tab>
          ))}
        </ul>
        <Content currentTab={tabsArr[activeTab]} />
      </>
    );
  }
}

Tabs.propTypes = { tabsArr: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default Tabs;
