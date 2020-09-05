import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = (props) => {
  const { tabs, togglerHandler, indexOfActive } = props;

  return (
    <div className="Tabs">
      <div className="nav nav-tabs">
        {tabs.map((elem, index) => (
          <li className="nav-item">
            <a
              href="#linterPlug"
              type="button"
              key={elem.title.split(' ').join('')} // word without spaces
              className={ClassNames({
                'nav-link': true,
                active: index === indexOfActive,
              })}
              onClick={() => {
                togglerHandler(index);
              }}
            >
              {elem.title}
            </a>
          </li>
        ))}
      </div>
      <p className="tab-content tab-pane fade active show">
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
