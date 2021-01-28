import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, index, SelectedTab }) => (
  <>
    <div>
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => SelectedTab(i)}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div>
      {tabs[index].content}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  index: PropTypes.number.isRequired,
  SelectedTab: PropTypes.func.isRequired,
};

export default Tabs;
