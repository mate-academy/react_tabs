import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const correctTabId = tabs.find(tab => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={
                classNames({ 'is-active': tab.id === correctTabId })
              }
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  (event) => {
                    event.preventDefault();
                    if (correctTabId !== tab.id) {
                      onTabSelected(tab);
                    }
                  }
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabs.find(tab => tab.id === correctTabId) || tabs[0]).content}
      </div>
    </div>
  );
};
