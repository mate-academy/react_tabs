type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  onChange: (title: string, content: string) => void;
  activeTab: string;
};

export const Tabs: React.FC<Props> = ({ tabs, onChange, activeTab }) => {


  return (
      <ul>
        {tabs.map((tab) => (
          <li
            className={tab.title === activeTab ? "is-active" : ""}
            data-cy="Tab"
            key={`#${tab.id}`}
          >
            <a
              data-cy="TabLink"
              href={`#${tab.id}`}
              onClick={() => onChange(tab.title, tab.content)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
  );
};
