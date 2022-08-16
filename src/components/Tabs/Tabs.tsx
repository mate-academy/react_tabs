import { AllTabs } from '../../types/Tabs';

type Props = {
  tabs: AllTabs[],
  selectedTab: string,
  onTabSelected(tab: AllTabs): void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const isSelectedTabExist = tabs.some(tab => tab.id === selectedTab);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              className={tab.id === selectedTab
                || (!isSelectedTabExist && !index)
                ? 'is-active' : ''}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={event => {
                  event.preventDefault();
                  if (selectedTab !== tab.id) {
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

      <div className="block" data-cy="tab-content">
        {tabs.find(tab => tab.id === selectedTab)?.content}
      </div>
    </div>
  );
};
