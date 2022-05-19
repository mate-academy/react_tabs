import { FC } from 'react';
import cs from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  handleTab: (newTab: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, handleTab }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="tabs">
      <div className="tabs__buttons">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className={cs(
              'tabs__tab',
              {
                'tabs__tab--selected': tab.id === selectedTabId,
              },
            )}
            onClick={() => handleTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {selectedTab && (
        <p className="tabs__content">
          {selectedTab.content}
        </p>
      )}
    </div>
  );
};
