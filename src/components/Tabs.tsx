type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelect: any,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onSelect,
}) => {
  const tabContent = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          value={tab.id}
          onClick={() => onSelect(tab)}
        >
          {tab.title}
        </button>
      ))}
      <p>{tabContent?.content}</p>
    </div>
  );
};
