import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  render() {
    const { tab, onTabSelected, tabIndex, tabIndexActive } = this.props;
    const buttonClassName = (currentIndex, activeIndex) => {
      let nameOfClass = 'tabs__button';

      switch (currentIndex) {
        case 0:
          nameOfClass += ' tabs__button-home';
          break;
        case 1:
          nameOfClass += ' tabs__button-profile';
          break;
        case 2:
          nameOfClass += ' tabs__button-contact';
          break;
        default:
          nameOfClass += '';
      }

      nameOfClass += currentIndex === activeIndex ? ' button--active' : '';

      return nameOfClass;
    };

    return (
      <button
        type="button"
        className={buttonClassName(tabIndex, tabIndexActive)}
        onClick={() => onTabSelected(tabIndex)}
      >
        {tab.title}
      </button>
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onTabSelected: PropTypes.oneOfType([PropTypes.func]).isRequired,
  tabIndex: PropTypes.oneOfType([PropTypes.number]).isRequired,
  tabIndexActive: PropTypes.oneOfType([PropTypes.number]).isRequired,
};

export default Tab;
