type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => (

  <ul className="App__tabs-list">
    {tabs.map(tab => (
      <li key={tab.id} className="Tabs-list__ item">
        <button
          type="button"
          className={tab.id === selectedTabId
            ? 'button is-light is-warning'
            : 'button is-light is-info'}
          onClick={() => {
            if (tab.id !== selectedTabId) {
              onTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </button>
      </li>
    ))}
  </ul>

);
