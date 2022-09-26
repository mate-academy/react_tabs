import ForTabs from '../../types/ForTabs';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: ForTabs[],
  selectedTabId: string,
  onTabSelected(tab: ForTabs): void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const handleClick = (tab: Tab) => (
    tab.id !== selectedTabId && onTabSelected(tab)
  );

  const findSelectedTab = tabs.some(tab => selectedTabId === tab.id);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, i) => (
            <li
              className={selectedTabId === tab.id || (!findSelectedTab && !i)
                ? 'is-active' : ''}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabs.find(tab => selectedTabId === tab.id)?.content}
      </div>
    </div>
  );
};
