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

  const handleClick = (event:any) => {
    event.preventDefault();
    onSelect(event.target.value);
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          value={tab.id}
          onClick={handleClick}
        >
          {tab.title}
        </button>
      ))}
      <p>{tabContent?.content}</p>
    </div>
  );
};
