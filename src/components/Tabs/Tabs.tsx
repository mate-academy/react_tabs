import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { TabsProps } from '../../types/TabsProps';

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onSelected,
}) => {
  let text = '';

  if (tabs && selectedTabId) {
    const selectedTab = tabs.find(tab => tab.id === selectedTabId);

    text = selectedTab ? selectedTab.content : '';
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
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

      { text && (
        <div
          className="block"
          data-cy="TabContent"
        >
          {text}
        </div>
      )}
    </div>
  );
};
