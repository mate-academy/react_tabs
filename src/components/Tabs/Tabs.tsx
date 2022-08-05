import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  handleClick: (arg: string)=>void,
};

export const Tabs:React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    handleClick,
  },
) => {
  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabId}`}
      </h1>

      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={classNames(
                  { 'is-active': selectedTabId === tab.id },
                )}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  id={tab.id}
                  onClick={(e) => {
                    handleClick(e.currentTarget.id);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="tab-content">
          {tabs.map(tab => (
            selectedTabId === tab.id
              && tab.content
          ))}
        </div>
      </div>
    </div>
  );
};
