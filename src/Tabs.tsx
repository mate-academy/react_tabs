interface Props {
  tabs: Tab[];
  onSelect: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, onSelect }) => {
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
    </>
  );
};
