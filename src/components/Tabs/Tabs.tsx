import classNames from 'classnames';
import { Tab } from '../../type';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (event: React.MouseEvent, tabId: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTabId === tab.id,
              })}
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={(event) => onTabSelected(event, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};
