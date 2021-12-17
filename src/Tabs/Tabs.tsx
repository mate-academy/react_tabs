import { Tab } from '../Tab';

type Props = {
  tabs: { id: string, title: string, content: string }[],
  selectedTabId: string,
  onTabSelected: (tab:Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="Tabs">
    {tabs.map(tab => (
      <>
        <button
          id={tab.id}
          type="button"
          onClick={() => {
            if (tab.id === selectedTabId) {
              onTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </button>
      </>
    ))}

    <p>
      {(tabs.find(tab => tab.id === selectedTabId) || tabs[0]).content}
    </p>
  </div>
);
