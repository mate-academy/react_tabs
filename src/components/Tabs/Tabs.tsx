import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const Tabs = ({ tabs, selectedTabId, onSelected }:
{ tabs: Tab[],
  selectedTabId: string,
  onSelected: (tabTitle: string) => void }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={tab.title === selectedTabId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  onSelected(tab.title);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabs.filter(tab => tab.title === selectedTabId)
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
