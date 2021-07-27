import React from 'react';
import PropTypes from 'prop-types';

const style = {
  list: {
    display: 'flex',
    padding: 0,
    margin: 0,
  },
  listItem: {
    listStyle: 'none',
  },
  button: {
    padding: '10px',
    border: 'none',
  },
  text: {
    margin: 0,
    backgroundColor: 'lightgrey',
  },
};

export const Tabs = React.memo(({ selectedTab, selectedTabId, onClick }) => (
  <div>
    <ul style={style.list}>
      {selectedTab.map(tab => (
        <li key={tab.id} style={style.listItem}>
          <button
            type="button"
            className={selectedTabId === tab.id ? 'active' : ''}
            onClick={() => onClick(tab.id)}
            style={style.button}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p style={style.text}>
      {selectedTab.find(tab => tab.id === selectedTabId).content}
    </p>
  </div>
));

Tabs.propTypes = {
  selectedTab: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
