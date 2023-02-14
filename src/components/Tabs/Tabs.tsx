import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tab = tabs.find((t) => t.id === selectedTabId);
  const currentTab = tab || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((t) => (
            <li
              key={t.id}
              className={cn({ 'is-active': t.id === currentTab.id })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (t.id !== selectedTabId) {
                    onTabSelected(t);
                  }
                }}
                href={`#${t.id}`}
                data-cy="TabLink"
              >
                {t.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
