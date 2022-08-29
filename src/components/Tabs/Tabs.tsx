import classNames from 'classnames';
import { Tab } from '../../interfaces/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelect: (tabId: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelect,
}) => {
  const shouldUpdate = (tabId: string) => {
    let selectedId = tabId;

    if (!tabs.map(tab => tab.id).includes(selectedId)) {
      selectedId = tabs[0].id;
    }

    if (selectedTabId !== selectedId) {
      onTabSelect(selectedId);
    }
  };

  if (tabs.length === 0) {
    return (
      <></>
    );
  }

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === selectedTabId })}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => shouldUpdate(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content
          || 'This tab is empty'}
      </div>
    </div>
  );
};
