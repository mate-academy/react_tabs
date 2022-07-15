import { useCallback } from 'react';

interface Props {
  tabs: Tab[];
  onSelect: (tab: Tab) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, onSelect, selectedTabId }) => {
  const printContent = useCallback((tabId: string) => {
    return tabs.find(tab => tab.id === tabId)?.content;
  }, []);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onSelect(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div data-cy="tab-content">
        {printContent(selectedTabId)}
      </div>
    </>
  );
};
