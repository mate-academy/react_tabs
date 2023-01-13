import cn from 'classnames';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  selectedOnTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId = tabs[0],
  selectedOnTab,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId || tabs[0]);

  const handleOnClick = (tab: Tab): void | '' => {
    if (tab.id !== selectedTabId) {
      selectedOnTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  handleOnClick(tab);
                }}
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
