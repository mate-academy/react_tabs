interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (obj: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: Props) => {
  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
            <p>{selectedTabId === tab.id ? tab.content : ''}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
