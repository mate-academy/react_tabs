import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onSelected: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onSelected,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={tab.id === selectedTabId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  onSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabs.filter(tab => tab.id === selectedTabId)
        .map(tab => (
          <div
            className="block"
            data-cy="TabContent"
            key={tab.id}
          >
            {tab.content}
          </div>
        ))}
    </div>
  );
};
