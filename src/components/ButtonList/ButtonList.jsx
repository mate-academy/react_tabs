import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonList.scss';

export class ButtonList extends React.PureComponent {
  render() {
    const { tabs, clickHandle, activeTab } = this.props;

    return (
      <>
        {tabs.map(tab => (
          <li
            className="list__item"
            key={tab.id}
          >
            <button
              id={tab.id}
              className={
                classNames('list__button',
                  { 'is-active': tab.title === activeTab })
              }
              type="button"
              onClick={() => {
                clickHandle(tab.id);
              }}
            >
              {tab.title}

            </button>
          </li>
        ))}
      </>
    );
  }
}

ButtonList.propTypes = PropTypes.arrayOf({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;
