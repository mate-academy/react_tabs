import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (props: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelected = tab.id === selectedTabId;

            return (
              <li
                key={tab.id}
                className={classNames({ 'is-active': findTab.id === tab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isSelected) {
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
        {findTab.content}
      </div>
    </div>
  );
};
