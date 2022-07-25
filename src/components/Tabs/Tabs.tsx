type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  setSelectedTabs: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  setSelectedTabs,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              className={(tab === selectedTab && 'is-active') || ''}
              onClick={() => setSelectedTabs(tab)}
              key={tab.id}
            >
              <a href={`#${tab.id}`}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
