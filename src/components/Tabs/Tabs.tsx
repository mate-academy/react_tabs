import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { TabsProps } from '../../types/TabsProps';

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onSelected,
}) => {
  const selectedTab = (tabs.find(tab => tab.id === selectedTabId) || tabs[0]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === selectedTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  onSelected(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>

    </div>
  );
};
