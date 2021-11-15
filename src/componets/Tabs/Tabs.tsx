import classnames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(item => item.id === selectedTabId);

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabSelected(tab)}
            className={classnames('tabs__button',
              {
                'tabs__button--active': tab.id === selectedTabId,
              })}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <p>
        {selectedTab?.content}
      </p>
    </div>
  );
};
