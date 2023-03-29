import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected(tab: Tab): void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTabId } = props;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTab.id === tab.id })}
              key={tab.id}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => {
                  if (selectedTab.id !== tab.id) {
                    onTabSelected(tab);
                  }
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
