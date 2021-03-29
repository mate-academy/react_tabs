import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export const Tabs =(props) => {
  const {
    tabs, onTabSelected, selectedTab} = props;
  const autoFocus = 'autoFocus';
  return (
    <>
      <ul>
        {tabs.map(tab => {
          return (
            <li key={tab.id}>
              <button
                className="button"
                type="button"
                {...(tab.id === 'tab-1'? {autoFocus}:{})}
                onClick={()=> onTabSelected(tab)}
                >
                {tab.title}
              </button>
            </li>)
        })}
      </ul>
      <hr/>
      <p>
        { selectedTab.content }
      </p>
    </>
  )
}

Tabs.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })
}
