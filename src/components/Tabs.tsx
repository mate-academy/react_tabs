import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC <Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const content = tabs.find(tab => tab.id === selectedTabId)?.content || tabs[0].content;

  return (
    <div>
      <ul className="wrap">
        {tabs.map(tab => (
          <li className="item">
            <button
              className="button"
              type="button"
              key={tab.id}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="text">{content}</p>
    </div>
  );
};
