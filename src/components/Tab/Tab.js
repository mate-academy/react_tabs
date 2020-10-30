import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { TabShape } from '../shapes/TabShape';

export const Tab = ({ index, title, selectedTabIndex, switchTab }) => (
  <div>
    <button
      type="button"
      className={
        classNames(
          'item ui green inverted button',
          { active: index === selectedTabIndex },
        )
      }
      onClick={() => {
        switchTab(index);
      }}
    >
      {title}
    </button>
  </div>
);

Tab.propTypes = {
  ...TabShape,
  selectedTabIndex: PropTypes.number.isRequired,
  switchTab: PropTypes.func.isRequired,
};
