import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export class Tabs extends React.PureComponent {
  render() {
    const { tabs, onChange, tabIndex } = this.props;

    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => onChange(index)}
            className={
              tabIndex === index
                ? 'tabs__button tabs__button-selected'
                : 'tabs__button'
            }
          >
            {tab.title}
          </button>
        ))}
      </div>
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
  onChange: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};
