import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: number,
  onTabSelected: (tabId: number) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, i) => {
          const { id, title } = tab;

          return (
            <li
              key={id}
              data-cy="Tab"
              className={i + 1 === selectedTabId ? 'is-active' : ''}
            >
              <a
                href={`#tab-${selectedTabId}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(i + 1)}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs[selectedTabId - 1].content}
    </div>
  </div>
);
