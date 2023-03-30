import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
}: Props) => {
  const selectTab = tabs.find(tab => tab.id === selectedTab) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab.content}
      </div>
    </div>
  );
};
