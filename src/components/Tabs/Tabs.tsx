import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
  activeTab: string,
  onActiveTab: (tab: Tab) => void,
  selectedTab: Tab,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  onActiveTab,
  selectedTab,
}) => {
  const hendleClick = (tab: Tab) => {
    if (activeTab !== tab.id) {
      onActiveTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className={classNames(
                    { 'is-active': tab.id === selectedTab.id },
                  )}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => hendleClick(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
