import { getCurrentTab } from '../../helpers';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab:Tab) => void;
};

export const Tabs = ({
  tabs, selectedTabId, onTabSelected,
}: Props) => {
  const currentTab = getCurrentTab(tabs, selectedTabId);

  const handleClick = (tab:Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={currentTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  handleClick(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
