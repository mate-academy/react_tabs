import React, { memo } from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  onSelect: (tabId: string) => void,
  selected: Tab,
};

export const Tabs: React.FC<Props> = memo(({
  tabs, onSelect, selected,
}) => (
  <div className="Tabs">
    {tabs.map(tab => (
      <button
        type="button"
        className={
          classNames(
            'Tabs__button',
            { 'Tabs__button--selected': selected === tab },
          )
        }
        key={tab.id}
        onClick={() => onSelect(tab.id)}
      >
        {tab.title}
      </button>
    ))}
  </div>
));
