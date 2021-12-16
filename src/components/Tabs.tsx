import { Tab } from '../types/Tab';
import './Tab.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC < Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <>
      <ul className="tabItem">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {selectedTab}
      </div>
    </>
  );
};
