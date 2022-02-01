type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  content: string;
};

export const TabsList: React.FC<Props> = ({ tabs, onTabSelected, content }) => {
  return (
    <ul className="Tab-List">
      <div className="btn-group">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </div>

      <p className="text">
        {content}
      </p>
    </ul>
  );
};
