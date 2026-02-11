import { Tab } from '../../App';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs,
  selectedTabId,
  onTabSelected, }: Props) => {

  const selected =
    tabs.find(tab => tab.id === selectedTabId) ?? tabs[0];
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={selectedTabId === tab.id ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={(e) => {
                    e.preventDefault();

                    if (tab.id !== selectedTabId) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selected.content}
      </div>
    </div>
  );
};
