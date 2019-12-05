import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
  render() {
    const { tabsList, onTabSelected, activeIndex } = this.props;

    const contentClassName = (i) => {
      switch (i) {
        case 0:
          return 'content content--home';
        case 1:
          return 'content content--profile';
        case 2:
          return 'content content--contact';
        default:
          return '';
      }
    };

    return (
      <section className="tabs">
        <div className="tabs__tabsList">
          {tabsList.map((currentTab, ind) => (
            <Tab
              tab={currentTab}
              tabIndex={ind}
              onTabSelected={onTabSelected}
              tabIndexActive={activeIndex}
              key={currentTab.title}
            />
          ))}
        </div>
        <div className={contentClassName(activeIndex)}>
          <p>
            {tabsList[activeIndex].content}
          </p>
        </div>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabsList: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onTabSelected: PropTypes.oneOfType([PropTypes.func]).isRequired,
  activeIndex: PropTypes.oneOfType([PropTypes.number]).isRequired,
};

export default Tabs;
