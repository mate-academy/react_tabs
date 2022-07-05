import { FC } from 'react';
import cn from 'classnames';
import './Tabs.scss';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  selectTabId: (tabId: string) => void;
}

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  selectTabId,
}) => {
  const displayContent = (tabId: string) => (
    tabs.find(tab => tabId === tab.id)?.content
  );

  return (
    <div>
      <div className="tabs__list">
        {tabs.map(tab => (
          <button
            type="button"
            className={cn('tabs__item', {
              'tabs__item--selected': tab.id === selectedTabId,
            })}
            key={tab.id}
            onClick={() => {
              if (selectedTabId !== tab.id) {
                selectTabId(tab.id);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        className="tabs__content"
        data-cy="tab-content"
      >
        {displayContent(selectedTabId)}
      </div>
    </div>
  );
};
