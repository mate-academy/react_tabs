import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onChange, selectedTab }) => (
  <>
    <ul className="list-group list-group-horizontal">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className="list-group-item list-group-item-action"
          type="button"
          onClick={() => onChange(tab)}
        >
          <h1>
            {tab.title}
          </h1>
        </button>
      ))}
    </ul>

    <p>
      {selectedTab.content}
    </p>
  </>
);

const tab = (
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tab).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedTab: tab.isRequired,
};

export default Tabs;
