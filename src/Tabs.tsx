import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[];
  onTabSelect: (tab: Tab) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelect, selectedTabId }) => {
  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelect(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div data-cy="tab-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};
