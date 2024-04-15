type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tab: Tab;
  onChange: (title: string, content: string) => void;
  activeTab: string;
};

export const Tabs: React.FC<Props> = ({ tab, onChange, activeTab }) => {


  return (
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
  );
};
