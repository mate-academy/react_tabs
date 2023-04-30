import classNames from 'classnames';

interface Props {
  selectedTabId: string;
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
  onTabSelected: (pressedId: string) => void;
}

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  tabs,
  onTabSelected,
}) => {
  return (
    <div className="section">
      <h1 className="title">
        Selected tab is Tab 1
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  className={classNames({
                    'is-active': tab.id === selectedTabId,
                  })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => onTabSelected(tab.id)}
                  >
                    {tab.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </div>
      </div>
    </div>
  );
};
