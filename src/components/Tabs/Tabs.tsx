import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
  index: number;
}

type Props = {
  preparedTabs: Tab[];
  selectedTabIndex: number;
  setTabID: (index: number) => void;
};

export const Tabs: React.FC<Props> = ({
  preparedTabs,
  selectedTabIndex,
  setTabID,
}) => {
  const actualContent: string = preparedTabs[selectedTabIndex].content;

  const clickHandler = (tab: Tab) => {
    setTabID(tab.index);
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul className="nav nav-tabs">
          {preparedTabs.map(tab => (
            <li
              className=""
              key={tab.id}
            >
              <button
                type="button"
                className={classNames(
                  'nav-link',
                  {
                    active: tab.index === selectedTabIndex,
                  },
                )}
                onClick={() => clickHandler(tab)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {actualContent}
      </div>
    </div>
  );
};
