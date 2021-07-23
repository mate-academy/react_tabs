import React from 'react';
import { Tab } from './Tab';
import PropTypes from 'prop-types';

import './TabList.css';

export const TabsList = ({
  tabs,
  onClick,
  id,
}) => (
  <>
    <ul
      className= "app__list"
    >
      {tabs.map(tab => (
        <li
          key={tab.id}
          
        >
          <Tab
            className={
              tab.id === id
                ? "app__tab app__tab--is-active"
                : "app__tab"
            }
            title={tab.title}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  </>
)

TabsList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onClick:PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}
