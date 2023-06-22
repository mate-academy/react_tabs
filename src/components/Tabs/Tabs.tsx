import cn from 'classnames';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId.id);

  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <li
            className={cn({ 'is-active': selectedTabId.id === tab.id })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={tab.id}
              data-cy="TabLink"
              onClick={(event) => {
                event.preventDefault();
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </>
  );
};
