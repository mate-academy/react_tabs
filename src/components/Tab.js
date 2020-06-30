import React from 'react';
import PropTypes from 'prop-types';
import { TabValidation } from './PropsValidation';

export const Tab = ({ title, index, isActive, selectTab }) => (
  <button
    type="button"
    onClick={() => selectTab(index)}
    className={(
      isActive ? 'button button--active' : 'button'
    )}
  >
    { title }
  </button>
);

Tab.propTypes = PropTypes.shape(TabValidation).isRequired;
