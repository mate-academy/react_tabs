import classNames from 'classnames';
import { TabType } from '../../types/TabType';

type Props = {
  tabs: TabType[];
  selectedTabId: string;
  onTabSelected: (tab: TabType) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const correctTab = tabs.find(tab => selectedTabId === tab.id);

  const correctTabId = correctTab ? correctTab.id : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames(
                { 'is-active': correctTabId === tab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => selectedTabId === tab.id)?.content}
      </div>
    </div>
  );
};
