import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames('', {
                'is-active': tab.id === selectedTab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tab.id !== selectedTabId && onTabSelected(tab)}
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
