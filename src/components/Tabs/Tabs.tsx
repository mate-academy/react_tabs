import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onSelected(tab)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};
