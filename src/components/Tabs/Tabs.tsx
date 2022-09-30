import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onActiveTab: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onActiveTab,
}) => {
  const hendleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onActiveTab(tab);
    }
  };

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  className={classNames(
                    { 'is-active': id === selectedTab.id },
                  )}
                  data-cy="Tab"
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => hendleClick(tab)}
                  >
                    {title}
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
