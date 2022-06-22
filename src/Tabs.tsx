import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div
        data-cy="tab-content"
      >
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};
