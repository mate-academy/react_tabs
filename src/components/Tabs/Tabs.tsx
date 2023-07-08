import cn from 'classnames';
import { SetStateAction } from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type TabsProps = {
  tabs: Tab[];
  selectedTab: Tab;
  setSelectedTab: React.Dispatch<SetStateAction<Tab>>;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  const handleSelectedTab = (tab: Tab): void => {
    if (tab !== selectedTab) {
      setSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab === selectedTab })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleSelectedTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
