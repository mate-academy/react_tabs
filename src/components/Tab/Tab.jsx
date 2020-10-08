import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tab = props => (
  <>
    <button
      type="button"
      className={classNames(
        'tab',
        { active: props.activeTab === props.title },
      )}
      key={props.title}
      onClick={() => props.onTabSelected(props.title)}
    >
      {props.title}
    </button>
  </>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
