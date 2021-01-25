import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class Tabs extends React.Component {
  state = {

  }

  render() {
    const { tabsCopy, selectIndex, onTabSelected } = this.props;

    return (
      <>
        {tabsCopy.map(tab => (
          <button
            className="button"
            type="button"
            key={tab.title}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
        <div className="content">
          {tabsCopy.find((tab, i) => i === selectIndex).content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabsCopy: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isReqired,
  })).isRequired,
  selectIndex: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
