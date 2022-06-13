// implement a component here
import { Tab } from '../react-app-env';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <ul className="tabs__list">
    {tabs.map(tab => (
      <li key={tab.id}>
        <button
          type="button"
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </button>
        {(tab.id === selectedTabId) && (
          <p>
            {tab.content}
          </p>
        )}
      </li>
    ))}
  </ul>
);
