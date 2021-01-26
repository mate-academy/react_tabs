import React from 'react';
import './tabs.css';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  render() {
    const { tabsList, selectTab } = this.props;

    return (
      tabsList.map(tab => (
        <div className="wrapper" key={tab.id}>
          <button
            type="button"
            className="button"
            onClick={() => selectTab(tab)}
          >
            {tab.title}
          </button>
        </div>
      ))
    );
  }
}

Tabs.propTypes = {
  getcontent: PropTypes.func.isRequired,
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
