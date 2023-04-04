export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
interface TabsProps {
  onTabSelected: (idTab: string) => void;
  selectedTabId: {
    title: string;
    content: string;
  };
}

export const Tabs: React.FC<TabsProps> = ({ onTabSelected, selectedTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              role="tab"
              onClick={() => onTabSelected(tab.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onTabSelected(tab.id);
                }
              }}
              className={selectedTabId.title === tab.title
                ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
