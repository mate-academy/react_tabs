import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: (titleName: string) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTab,
    selectedTabId,
  },
) => {
  const hendlClick = (tab: Tab) => {
    selectedTab(tab.title);
  };

  const content = tabs.filter(tab => (
    tab.title === selectedTabId
  ));

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': tab.title === selectedTabId,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => (hendlClick(tab))}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content[0].content}
      </div>
    </div>
  );
};
