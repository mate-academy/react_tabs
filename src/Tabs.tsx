interface Props {
  tabs: Tab[],
  onSelect: (tab: Tab) => void,
}

const Tabs: React.FC<Props> = ({ tabs, onSelect }) => {
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="nav-item"
        >
          <button
            type="button"
            onClick={() => onSelect(tab)}
            className="nav-link"
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
