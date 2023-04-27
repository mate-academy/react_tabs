import { FC } from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  id: string,
  selectedTab: (tab: Tab) => void,
};

export const Tabs: FC<Props> = ({
  tabs,
  id,
  selectedTab,
}) => {
  const chosenTab = tabs.find(tab => tab.id === id) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (tab.id !== id) {
      selectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={
                tab.id === chosenTab.id
                  ? 'is-active'
                  : ''
              }
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {chosenTab.content}
      </div>
    </div>
  );
};
