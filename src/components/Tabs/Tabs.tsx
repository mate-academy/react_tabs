import { ITab } from '../../types/ITab';

type Props = {
  tabs: ITab[];
  selectedTabId: string;
  onTabSelected: (tab: ITab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabContent = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={selectedTabId === id ? 'is-active' : ''}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={
                    selectedTabId !== id ? () => onTabSelected(tab) : undefined
                  }
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
