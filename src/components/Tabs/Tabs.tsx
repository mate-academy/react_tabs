type Props = {
  tabs: { id: string; title: string; content: string }[];
  changeTab: (id: string) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, changeTab, selectedTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        {tabs.map(({ id, title }) => (
          <li
            key={id}
            className={`${id === selectedTabId ? 'is-active' : '  '}`}
            data-cy="Tab"
          >
            <a
              onClick={() => {
                changeTab(id);
              }}
              href={`#${id}`}
              data-cy="TabLink"
            >
              {title}
            </a>
          </li>
        ))}
        <ul></ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs
          .filter(({ id }) => id === selectedTabId)
          .map(({ id, content }) => (
            <div key={id} className="block" data-cy="TabContent">
              {content}
            </div>
          ))}
      </div>
    </div>
  );
};
