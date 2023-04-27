import classNames from 'classnames';
import { useState } from 'react';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  onTabSelect: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelect }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]?.title);

  const handleTabClick = (tab: Tab) => {
    setCurrentTab(tab.title);
    onTabSelect(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                data-cy="Tab"
                className={classNames(
                  {
                    'is-active': tab.title === currentTab,
                  },
                )}
              >
                <a
                  href={tab.id}
                  data-cy="TabLink"
                  onClick={(event) => {
                    event.preventDefault();
                    handleTabClick(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => (
          currentTab === tab.title
        ))?.content}
      </div>
    </div>
  );
};
