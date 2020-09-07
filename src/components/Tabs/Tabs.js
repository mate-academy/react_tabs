import React from 'react';
import './Tabs.css';

import PropTypes from 'prop-types';
import cn from 'classnames';

export const Tabs = ({
  tabs,
  index,
  onSelected,
}) => (
  <section className="tabs">
    <section className="tabs__buttons buttons">
      {tabs.map((tab, titleIndex) => (
        <button
          type="button"
          key={tab.title}
          className={cn('buttons__button', 'button', {
            'button--active': titleIndex === index,
          })}
          onClick={() => onSelected(titleIndex)}
        >
          {tab.title}
        </button>
      ))}
    </section>

    <section className="tabs__content content">
      {tabs.map((tab, contentIndex) => (
        <p
          key={tab.content}
          className={cn('content__text', { hidden: index !== contentIndex })}
        >
          {tab.content}
        </p>
      ))}
    </section>
  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  index: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
};
