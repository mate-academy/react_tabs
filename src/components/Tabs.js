import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentIndex: 0 };
  }

  chooseTabsIndex = index => (
    this.setState({ currentIndex: index })
  )

  render = () => {
    const { tabsArr } = this.props;
    const { currentIndex } = this.state;

    return (
      <section className="tabs">
        <div className="tabs__buttons">
          {tabsArr.map((tab, index) => (
            <Tab
              key={tab.title}
              handler={() => this.chooseTabsIndex(index)}
              activeIndex={currentIndex}
              tabIndex={index}
            >
              {tab.title}
            </Tab>
          ))}
        </div>

        <p className="tabs__content">
          {tabsArr[currentIndex].content}
        </p>
      </section>
    );
  };
}

Tabs.propTypes = { tabsArr: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
