import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTab: Tab | undefined,
  setSelectedTab: Dispatch<SetStateAction<Tab | undefined>>
};

export const currentTab = function selectTab(
  title: string | null,
  tabs: Tab[],
) {
  return tabs.find(tab => tab.title === title);
};

export const Tabs:React.FC<Props> = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab === selectedTab })}
              data-cy={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => {
                  setSelectedTab(
                    currentTab(event.currentTarget.textContent, tabs),
                  );
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
