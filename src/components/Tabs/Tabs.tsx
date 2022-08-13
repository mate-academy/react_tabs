import cn from 'classnames';
import { Tab } from '../../Tab';

interface Props {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  const changeTabHandler = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={cn({ 'is-active': selectedTabId === id })}
                key={id}
              >
                <a
                  href={`#${id}`}
                  onClick={() => changeTabHandler(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
