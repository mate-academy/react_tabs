type TabsProps = {
  tabs: Tab[],
  selectedTabId: string,
  onSelect: any,
};

export const Tabs = (props: TabsProps) => {
  const { tabs, selectedTabId, onSelect } = props;
  const tabContent = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          name={tab.id}
          onClick={onSelect}
        >
          {tab.title}
        </button>
      ))}

      <p>
        {tabContent}
      </p>
    </>
  );
};
