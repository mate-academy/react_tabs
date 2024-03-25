import classNames from 'classnames';
import { Tab } from '../../Types';

type TabsProps = {
  tabs: { id: string; title: string; content: string }[];
  onTabSelected: (tab: { id: string; title: string; content: string }) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const displayTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const onClickHandler = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === displayTab?.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onClickHandler(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {displayTab.content}
      </div>
    </div>
  );
};
