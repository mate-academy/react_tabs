import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onHandelSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onHandelSelectedTab,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onHandelSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': selectedTab.id === tab.id,
              })}
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
        {selectedTab.content}
      </div>
    </div>
  );
};
