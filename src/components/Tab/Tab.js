import React from 'react';
import './Tab.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tab = props => (
  <>
    <button
      key={props.title}
      type="button"
      className={classNames(
        'tab',
        { active: props.activeTab === props.title },
      )}
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
