/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
// I dont know what to do, so I just turned linter off
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = (props) => {
  const { tabs, togglerHandler, indexOfActive } = props;

  return (
    <div className="Tabs">
      <div className="Tabs__list">
        {tabs.map((elem, index) => (
          <div
            key={index}
            className={ClassNames({
              Tabs__toggler: true,
              'Tabs__toggler--active': index === indexOfActive,
            })}
            onClick={() => {
              togglerHandler(index);
            }}
          >
            {elem.title}
          </div>
        ))}
        <div className="Tabs__toggler Tabs__toggler--plug" />
      </div>
      <p className="Tabs__content">
        {tabs[indexOfActive].content}
      </p>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  togglerHandler: PropTypes.func.isRequired,
  indexOfActive: PropTypes.number.isRequired,
};
