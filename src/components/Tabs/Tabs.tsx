import classNames from 'classnames';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const hanldeTabSelected = (tab: Tab) => {
    if (tab.id !== selectedTab) {
      onTabSelected(tab);
    }
  };

  const currentTab = tabs.find((tab) => tab.id === selectedTab) || tabs[0];

  const { content } = currentTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === currentTab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => hanldeTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
