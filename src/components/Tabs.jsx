import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.scss';

const Tabs = ({ tabs, id, content, choiceTab }) => (
  <div className="tabs">
    <div className="tabs__container">
      {tabs.map(tab => (
        /* eslint-disable */
        <a
          className={cn(
            'tabs__item',
            { 'tabs__item--active': tab.id === id },
          )}
          key={tab.id}
          href="#"
          onClick={() => {
            if (tab.id !== id) {
              choiceTab(tab);
            }
          }}
        >
          {tab.title}
        </a>
        /* eslint-enable */
      ))}
      <div className="tabs__content">{content}</div>
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf({}).isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string,
  choiceTab: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  content: '',
};

export default Tabs;
