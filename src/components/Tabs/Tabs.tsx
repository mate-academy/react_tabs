import classNames from 'classnames';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[],
  onTabSelect: (tab: Tab) => void,
  selectedTabID: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelect,
  selectedTabID,
}) => {
  const handleTabSelection = (tab: Tab) => {
    if (selectedTabID !== tab.id) {
      onTabSelect(tab);
    }
  };

  const currentTab = tabs.find(tab => tab.id === selectedTabID) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={classNames(selectedTabID === tab.id && 'is-active')}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelection(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
