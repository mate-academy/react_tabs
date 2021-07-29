import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabsType } from '../types';
import './Tabs.scss';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTabInfo = tabs.find(tab => (
    tab.id === selectedTabId
  ));

  return (
    <section className="tabs">
      <div className="tabs__buttons">
        {tabs.map(tab => (
          <button
            type="button"
            className={classNames(
              'btn',
              'tabs__button',
              {
                'btn-danger': selectedTabId === tab.id,
                'btn-primary': selectedTabId !== tab.id,
              },
            )}
            key={tab.id}
            onClick={() => onTabSelected(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p className="tabs__text">
        {selectedTabInfo.content}
      </p>
    </section>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabsType).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
