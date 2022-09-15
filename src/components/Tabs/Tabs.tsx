import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  onSelect: (
    tabId: string,
    tabTitle: string,
    tabContent: string,
  ) => void,
  tabId: string,
  tabTitle: string,
  tabContent: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onSelect,
  tabId,
  tabTitle,
  tabContent,
}) => {
  return (
    <>
      <h1 className="title">
        {`Selected tab is ${tabTitle}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title, content }) => (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': tabId === id,
                })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    onSelect(id, title, content);
                  }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabContent}
        </div>
      </div>
    </>
  );
};
