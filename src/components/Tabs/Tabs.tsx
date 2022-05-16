import { FC } from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  handleTab: (newTab: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, handleTab }) => {
  const selectedObj = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="tabs">
      <div className="tabs__buttons">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className={`tabs__tab
                ${tab.id === selectedTabId && 'tabs__tab--selected'}`}
            onClick={() => handleTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p className="tabs__content">
        {selectedObj?.content || tabs[0].content}
      </p>
    </div>
  );
};
