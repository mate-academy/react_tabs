import React from 'react';
import PropTypes from 'prop-types';
import { contentType, tabShape } from '../shapes/TabShape';

export const Tab = ({ callback, tab, stateActive, children }) => (
  <>
    <button
      type="button"
      href="#"
      onClick={() => {
        callback(tab.id, children);
      }}
      className={stateActive === tab.id ? 'nav-link active' : 'nav-link'}
    >
      {tab.title}
    </button>

  </>
);

Tab.propTypes = {
  callback: PropTypes.func.isRequired,
  tab: tabShape.isRequired,
  stateActive: PropTypes.number.isRequired,
  children: contentType.isRequired,
};
