import { FC, memo } from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: CallableFunction,
};

const Tabs: FC<Props> = memo(({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div>
      <ul className="tabs">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`tabs__tab ${selectedTabId === tab.id ? 'tabs__tab--active' : ''}`}
          >
            <button
              className="tabs__button"
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Tabs;
